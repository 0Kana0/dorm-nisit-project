import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Table, Container, Button } from 'react-bootstrap'
import { ImCheckmark, ImCross } from 'react-icons/im'
import NavbarAdmin from '../../layouts/NavbarAdmin'
import { listDormRoomBills } from '../../functions/bill'
import { useSelector } from 'react-redux'
import { DateTime } from 'luxon'

const Utilities = () => {
  const { user } = useSelector((state) => ({ ...state }))
  const { dormId, roomId } = useParams()

  const [bills,setBills] = useState([])

  useEffect(()=>{
    listDormRoomBills(user.token,dormId, roomId).then((res)=>{
      setBills(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  },[])

  const payBill = (currentItem,paid) => {

  }

  const billsTable = bills.map((item,index)=>{
    let fine = 0
    let issueDate = DateTime.fromISO(item.issueDate)
    let dueDate = DateTime.fromISO(item.issueDate).plus({months:1})
    let currentDate = DateTime.now()
    console.log(currentDate)
    if (currentDate > dueDate) {
      let diff = currentDate.diff(dueDate,['days'])
      let days = diff.as('days')
      fine += Math.floor(days) * 20
    }
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{item.room.roomID}</td>
        <td>{issueDate.toFormat('d MMMM y')}</td>
        <td>{item.water}</td>
        <td>{item.electric}</td>
        <td>{fine}</td>
        <td>{item.water + item.electric + fine}</td>
        <td>{dueDate.toFormat('d MMMM y')}</td>
        <td>{item.paid ? 
          <>
            <ImCheckmark style={{color:'green'}}/>{' '}
            ชำระแล้ว
          </> : 
          <>
            <ImCross style={{color:'darkred'}}/>{' '}
            ค้างชำระ
          </>
          }
        </td>
      </tr>
    )
  })

  return (
    <div>
      <div className='container py-5'>
        <div className='d-flex'>
          <h3 className='flex-fill'>สาธารณูปโภค</h3>
          <div className="d-flex justify-content-end gap-2">
            <Link className='btn btn-outline-dark' to={-1}>ย้อนกลับ</Link>
            <Link className="btn btn-outline-success" to="/admin/create-bill">เพิ่มบิลค่าไฟ</Link>
          </div>
        </div>
        <hr></hr>
        {billsTable.length > 0 ? 
          <Table responsive hover >
            <thead>
              <tr>
                <th>ลำดับ</th>
                <th>ห้อง</th>
                <th>วันที่ออกบิล</th>
                <th>ค่าน้ำ</th>
                <th>ค่าไฟ</th>
                <th>ค่าปรับ</th>
                <th>รวม</th>
                <th>หมดเขตวันที่</th>
                <th>สถานะ</th>
              </tr>
            </thead>
            <tbody className='table-group-divider'>
              {billsTable}
            </tbody>
          </Table> :
          <h3>ไม่มี</h3>
        }
        
      </div>
    </div>
  )
}

export default Utilities