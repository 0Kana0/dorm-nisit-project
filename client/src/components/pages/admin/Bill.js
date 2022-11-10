import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Table, Container, Button } from 'react-bootstrap'
import { ImCheckmark, ImCross } from 'react-icons/im'
import NavbarAdmin from '../../layouts/NavbarAdmin'
import { listDormRoomBills, listTenantsDormRoomBills } from '../../functions/bill'
import { useSelector } from 'react-redux'
import { DateTime } from 'luxon'

const Utilities = () => {
  const { user } = useSelector((state) => ({ ...state }))
  const { dormId, roomId } = useParams()

  const [bills,setBills] = useState([])
  const [tenants, setTenants] = useState([])

  useEffect(()=>{
    listDormRoomBills(user.token,dormId, roomId).then((res)=>{
      setBills(res.data)
    }).catch((err)=>{
      console.log(err)
    })
    listTenantsDormRoomBills(user.token, dormId, roomId).then((res)=>{
      setTenants(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  },[])

  const payBill = (currentItem,paid) => {

  }

  const billsTable = bills.map((item,index)=>{
    const issueDate = DateTime.fromISO(item.issueDate)
    const dueDate = DateTime.fromISO(item.issueDate).plus({months:1})
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{item.room.roomID}</td>
        <td>{issueDate.toFormat('d MMMM y')}</td>
        <td>{item.water}</td>
        <td>{item.electric}</td>
        <td>{item.water + item.electric}</td>
        <td>{dueDate.toFormat('d MMMM y')}</td>
      </tr>
    )
  })

  const tenantsTable = tenants.map((item,index)=>{
    console.log(item)
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{item.user.firstname} {item.user.lastname}</td>
        <td>{item.user.studentID}</td>
        <td>{item.water}</td>
        <td>{item.electric}</td>
        <td>{item.fine}</td>
        <td>{item.water + item.electric + item.fine}</td>
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
                <th>รวม</th>
                <th>หมดเขตวันที่</th>
              </tr>
            </thead>
            <tbody className='table-group-divider'>
              {billsTable}
            </tbody>
          </Table> :
          <h3>ไม่มี</h3>
        }
        <hr/>
        <h3>ผู้เช่า</h3>
        <Table responsive hover>
          <thead>
            <tr>
              <th>ลำดับ</th>
              <th>ชื่อ-สกุล</th>
              <th>รหัสนิสิต</th>
              <th>ค่าน้ำ</th>
              <th>ค่าไฟ</th>
              <th>ค่าปรับ</th>
              <th>รวม</th>
              <th>สถานะ</th>
            </tr>
          </thead>
          <tbody className='table-group-divider'>
            {tenantsTable}
          </tbody>
        </Table>
        
      </div>
    </div>
  )
}

export default Utilities