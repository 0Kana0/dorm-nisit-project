import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Table } from "react-bootstrap";
import { listTenantsDormRoomBills } from "../../functions/bill";
import { FaCheck } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'

import { useSelector } from "react-redux";

const TenantsBill = () => {
  const { user } = useSelector((state)=>({...state}))
  const [tenants,setTenants] = useState([])
  const { dormId, roomId, billId } = useParams()

  useEffect(()=>{
    listTenantsDormRoomBills(user.token,dormId, roomId, billId)
    .then((res)=>{
      setTenants(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])

  const tenantsTable = tenants.map((item,index)=>{
    console.log(item)
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{item.dormroom.roomID}</td>
        <td>{item.user.firstname} {item.user.lastname}</td>
        <td>{item.user.studentID}</td>
        <td>{item.water}</td>
        <td>{item.electric}</td>
        <td>{item.fine}</td>
        <td>{item.water + item.electric + item.fine}</td>
        <td>{item.paid ?
          <div>
            <FaCheck style={{color:'green'}}/>{" "}ชำระแล้ว
          </div> : 
          <div>
            <ImCross style={{color:'darkred'}}/>{" "}ยังไม่ชำระ
          </div>
        }</td>
      </tr>
    )
  })

  return (
    <Container className="py-5">
      <div className="d-flex">
        <h3>ผู้เช่าในรอบเดือน</h3>
        <div className="flex-fill d-flex justify-content-end">
          <Link className="btn btn-outline-dark" to={-1}>ย้อนกลับ</Link>
        </div>
      </div>
      <hr/>
      <Table>
        <thead>
          <tr>
            <th>ลำดับ</th>
            <th>ห้อง</th>
            <th>ชื่อ-สกุล</th>
            <th>รหัสนิสิต</th>
            <th>ค่าน้ำ</th>
            <th>ค่าไฟ</th>
            <th>ค่าปรับ</th>
            <th>รวม</th>
            <th>สถานะ</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {tenantsTable}
        </tbody>
      </Table>
    </Container>
  )
}

export default TenantsBill