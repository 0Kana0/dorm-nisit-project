import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Table, Container, Button } from 'react-bootstrap'
import { ImCheckmark, ImCross } from 'react-icons/im'
import NavbarAdmin from '../../layouts/NavbarAdmin'
import { listBills } from '../../functions/bill'
import { useSelector } from 'react-redux'

const Utilities = () => {
  const { user } = useSelector((state) => ({ ...state }))

  const [bills,setBills] = useState([])

  useEffect(()=>{
    listBills(user.token).then((res)=>{
      setBills(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  },[])

  const options = {
    day:'numeric',
    month:'long',
    year:'numeric'
  }

  const payBill = (currentItem,paid) => {

  }

  const billsTable = bills.map((item,index)=>{
    let fine = 0
    let dueDate = new Date(item.issueDate)
    dueDate.setMonth(dueDate.getMonth() + 1)
    let currentDate = Date.now()
    if (currentDate > dueDate) {
      fine += (currentDate - dueDate) * 20
    }
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{item.room.roomID}</td>
        <td>{new Date(item.issueDate).toLocaleDateString('th-TH',options)}</td>
        <td>{item.water}</td>
        <td>{item.electric}</td>
        <td>{fine}</td>
        <td>{item.water + item.electric + fine}</td>
        <td>{new Date(item.dueDate).toLocaleDateString('th-TH',options)}</td>
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
        <td className='d-grid'>
          {item.paid ?
            <Button variant="outline-danger" onClick={()=>payBill(item,!item.paid)}>ยกเลิก</Button> :
            <Button variant="outline-success" onClick={()=>payBill(item,!item.paid)}>ชำระ</Button>
          }
        </td>
      </tr>
    )
  })

  return (
    <div>
      <NavbarAdmin />
      <div className='container py-5'>
        <div className="d-flex justify-content-between">
          <h3>สาธารณูปโภค</h3>
          <Link className="btn btn-outline-success" to="/admin/create-bill">เพิ่มบิลค่าไฟ</Link>
        </div>
        <hr></hr>
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
              <th>รายละเอียด</th>
            </tr>
          </thead>
          <tbody className='table-group-divider'>
            {billsTable}
          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default Utilities