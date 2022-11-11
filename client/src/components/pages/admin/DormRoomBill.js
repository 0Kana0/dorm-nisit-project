import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Image } from "react-bootstrap";

import { useSelector } from "react-redux";

import { listDormRoom } from "../../functions/dormRoom";

const DormRoomBill = () => {

  const { user } = useSelector((state)=>({...state}))
  const { dormId } = useParams()
  const navigate = useNavigate()

  const roomState = (state) => {
		if (state) {
			return (
				<p className="card-text">สถานะของห้อง ว่าง</p>
			)
		} else {
			return (
				<p className="card-text">สถานะของห้อง เต็ม</p>
			)
		}
	}

  const [dormrooms, setDormrooms] = useState([])

  useEffect(()=>{
    listDormRoom(user.token, dormId)
      .then((res) => {
        setDormrooms(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  },[])

  return (
    <Container className="py-5">
      <h3>ค่าน้ำค่าไฟแยกตามห้อง</h3>
      <hr/>
      <Row sm={2} md={4} className="g-2">
        {dormrooms.map((item,index)=>{
          console.log(item._id)
          return (
            <Col key={index} onClick={()=>navigate(`/admin/bill/${dormId}/${item._id}`)}>
              <Card>
                <Card.Body>
                  <h5 className="card-title">{item.dorm.name} ห้อง {item.roomID}</h5><hr/>
                  <p className="card-text">ชั้น {item.floor} ห้องที่ {item.room}</p>
                  <p className="card-text">ประเภทห้อง {item.roomtype}</p>
                  <p className="card-text">จำนวนผู้อยู่อาศัย {item.member}คน/ห้อง</p>
                  <p className="card-text">ราคา {item.price} บาท</p>
                  {roomState(item.roomState)}
                </Card.Body>
              </Card>
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}

export default DormRoomBill