import React, { useState } from 'react'
import { Table, Container, Button } from 'react-bootstrap'

const Utilities = () => {
  // Data Mockup จำลองข้อมูลก่อน ค่อยมาเปลี่ยนเป็น Fetch จาก Backend ทีหลัง
  const [utils, setUtils] = useState([
    { 
      room:'2208',
      issueDate:'2022-9-31',
      dueDate:'2022-10-31',
      water:60,
      electric:280,
      fine:0,
    }
  ])

  const options = {
    timeZone: 'Asia/Bangkok',
    day:'numeric',
    month:'long',
    year:'numeric',
  }

  const utilsTable = utils.map((item,index)=>{
    return (
      <tr key={index}>
        <td>{index}</td>
        <td>{item.room}</td>
        <td>{new Date(item.issueDate).toLocaleDateString('th-TH',options)}</td>
        <td>{item.water}</td>
        <td>{item.electric}</td>
        <td>{item.fine}</td>
        <td>{item.water + item.electric + item.fine}</td>
        <td>{new Date(item.dueDate).toLocaleDateString('th-TH',options)}</td>
        <td className='d-grid'>
          <Button variant="outline-success">ชำระ</Button>
        </td>
      </tr>
    )
  })

  return (
    <Container className="py-5">
      <div className="d-flex justify-content-between">
        <h3>ค่าไฟ</h3>
        <Button variant="outline-success">เพิ่มบิลค่าไฟ</Button>
      </div>
      <hr></hr>
      <Table responsive hover bordered>
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
            <th>รายละเอียด</th>
          </tr>
        </thead>
        <tbody>
          {utilsTable}
        </tbody>
      </Table>
    </Container>
  )
}

export default Utilities