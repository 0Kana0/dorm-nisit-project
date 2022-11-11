import React, { useState, useEffect } from 'react'
import NavbarUser from '../../layouts/NavbarUser'
import { Link, useParams } from "react-router-dom";

// function
import { listDormRoom } from '../../functions/dormRoom'

// redux
import { useSelector } from 'react-redux';

const UserDormRoomList = () => {
	const { user } = useSelector((state) => ({ ...state }))
  const param = useParams()
	const [dormroom, setDormroom] = useState([])

  useEffect(() => {
    loadData(user.token, param.id)
  }, [])

  const loadData = (authtoken, id) => {
    listDormRoom(authtoken, id)
      .then((res) => {
        setDormroom(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

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

	return (
		<div>
			<div className='container py-5'>
				<div className="row">
					<div className="d-flex justify-content-between align-items-center experience">
						<h3>ห้องพักทั้งหมด</h3>
						<Link className="btn btn-outline-secondary" to='/user/dormlist'>ย้อนกลับ</Link>
					</div><br />
				</div><hr />
				<div className="row px-5">
					{dormroom.map((item)=>
						<Link className="card col-sm-3 mt-5 nav-link" key={item._id} to={"/user/dorm/room/" + item._id}>
							<div className="card-body">
								<h5 className="card-title">{item.dorm.name} ห้อง {item.roomID}</h5><hr/>
								<p className="card-text">ชั้น {item.floor} ห้องที่ {item.room}</p>
								<p className="card-text">ประเภทห้อง {item.roomtype}</p>
								<p className="card-text">จำนวนผู้อยู่อาศัย {item.member}คน/ห้อง</p>
								<p className="card-text">ราคา {item.price} บาท</p>
								{roomState(item.roomState)}
							</div>
						</Link>
					)}
				</div>
			</div>
		</div>
	)
}

export default UserDormRoomList