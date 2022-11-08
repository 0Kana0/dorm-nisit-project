import React, { useState } from 'react'
import { Table, Container, Button } from 'react-bootstrap'
import { ImCheckmark, ImCross } from 'react-icons/im'

const Utilities = () => {
  // Data Mockup จำลองข้อมูลก่อน ค่อยมาเปลี่ยนเป็น Fetch จาก Backend ทีหลัง
  const [utils, setUtils] = useState([
    { 
      id:1,
      room:'2208',
      issueDate:'2022-9-31',
      dueDate:'2022-10-31',
      water:60,
      electric:280,
      fine:0,
      paid:false,
    },
    { 
      id:2,
      room:'2316',
      issueDate:'2022-9-31',
      dueDate:'2022-10-31',
      water:80,
      electric:300,
      fine:0,
      paid:false,
    },
  ])

  const options = {
    timeZone: 'Asia/Bangkok',
    day:'numeric',
    month:'long',
    year:'numeric',
  }

  const paidUtils = (id,paid) => {
    const mappedUtils = utils.map((item)=>{
      if (item.id === id) {
        item.paid = paid
        return item
      }
      return item
    })
    setUtils(mappedUtils)
  }

  const utilsTable = utils.map((item,index)=>{
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{item.room}</td>
        <td>{new Date(item.issueDate).toLocaleDateString('th-TH',options)}</td>
        <td>{item.water}</td>
        <td>{item.electric}</td>
        <td>{item.fine}</td>
        <td>{item.water + item.electric + item.fine}</td>
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
            <Button variant="outline-danger" onClick={()=>paidUtils(item.id,!item.paid)}>ยกเลิก</Button> :
            <Button variant="outline-success" onClick={()=>paidUtils(item.id,!item.paid)}>ชำระ</Button>
          }
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
          {utilsTable}
        </tbody>
      </Table>
    </Container>
  )
}

export default Utilities