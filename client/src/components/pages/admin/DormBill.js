import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { listDorm  } from "../../functions/dorm";

import { Container, Col, Row, Image, Card } from 'react-bootstrap'

import { useSelector } from "react-redux";

const DormBill = () => {

  const [dorms,setDorms] = useState([])
  const { user } = useSelector((state)=>({...state}))

  const navigate = useNavigate()

  useEffect(()=>{
    listDorm(user.token)
    .then((res)=>setDorms(res.data))
    .catch((err)=>console.log(err))
  },[])

  return (
    <Container className="py-5">
      <h3>ค่าน้ำค่าไฟ</h3>
      <hr/>
      <Row sm={2} md={4} className="g-2">
        {dorms.map((item,index)=>{
          return (
            <Col key={index} onClick={()=>navigate(`/admin/bill/${item._id}`)}>
              <Card>
                <Image style={{height:'12rem',objectFit:'cover'}} src={item.dormImg} fluid rounded/>
                <Card.Body>
                  <h4>{item.name}</h4>
                  <hr/>
                  <p className="card-text">ประเภท หอ{item.dormType}</p>
                  <p className="card-text">จำนวนชั้นทั้งหมด {item.dormFloor} ชั้น</p>
                  <p className="card-text">ชั้นละ {item.dormRoom} ห้อง</p>
                </Card.Body>
              </Card>
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}

export default DormBill