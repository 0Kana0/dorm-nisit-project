import React, { useState, useEffect } from 'react'
import NavbarUser from '../../layouts/NavbarUser'
import { Link, useParams, useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap'

// function

import { listDormRoomID, editRoomState } from '../../functions/dormRoom'
import { listSubmit, createSubmit } from '../../functions/submit';
import { readUsers, updateUserBookTrue } from '../../functions/user'

// redux
import { useSelector } from 'react-redux';

// React toastify
import { ToastContainer, toast } from 'react-toastify'

const UserDormRoomDetail = () => {
	const navigate = useNavigate()
	const { user } = useSelector((state) => ({ ...state }))
	const param = useParams()
	const [dorm, setDorm] = useState([])
	const [room, setRoom] = useState([])
	const [submit, setSubmit] = useState([])
	const [userdata, setUserdata] = useState([])

	useEffect(() => {
		loadData(user.token, param.id)
		loadDataSubmit(user.token, param.id)
		loadDataUser(user.token, user.id)
	}, [])

	const loadData = (authtoken, id) => {
		listDormRoomID(authtoken, id)
			.then((res) => {
				setDorm(res.data.dorm)
				setRoom(res.data)
			})
			.catch((err) => {
				console.log(err)
			})
	}

	const loadDataUser = (authtoken, id) => {
    readUsers(authtoken, id)
      .then((res) => {
        setUserdata(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

	const loadDataSubmit = (authtoken, id) => {
		listSubmit(authtoken, id)
			.then((res) => {
				console.log(res.data)
				setSubmit(res.data)
			})
			.catch((err) => {
				console.log(err)
			})
	}
	const bookMember = submit.length
	console.log(bookMember)

	const onSubmit = () => {
		if (bookMember < room.member) {
			if (bookMember == room.member-1) {
				createSubmit(user.token, {dorm:dorm._id,dormroom:param.id,user:user.id})
					.then((res) => {
						editRoomState(user.token, room._id)
						console.log(res.data)
						alert('จองห้องสำเร็จ')
						window.location.reload();
					})
					.catch((err) => {
						console.log(err)
					})
			} else {
				createSubmit(user.token, {dorm:dorm._id,dormroom:param.id,user:user.id})
					.then((res) => {
						console.log(res.data)
						alert('จองห้องสำเร็จ')
						window.location.reload();
					})
					.catch((err) => {
						console.log(err)
					})
			}
		}
	}

	const onChangeBookState = () => {
		if (bookMember < room.member) {
			updateUserBookTrue(user.token, user.id)
			.then((res) => {
				console.log(res.data)
			})
			.catch((err) => {
				console.log(err)
			})
		}
	}

	const userSubmit = submit.map((item)=>{
		return (
			<tr key={item._id}>
				<th scope="col">{item.user.studentID}</th>
				<td>{item.user.firstname} {item.user.lastname}</td>
				<td>{item.user.faculty}</td>
				<td>{item.user.major}</td>
				<td>{item.user.classYear}</td>
				<td><a target="_blank" href={"https://reg.src.ku.ac.th/res/table_std.php?id="+item.user.studentID+"&c_level=Bachelor"}><button className="btn btn-outline-info">ตารางเรียน</button></a></td>
				<td></td>
			</tr>
		)
	})

	const ShowData = () => {
		if (submit.length > 0) {
			return (
				<div>
					<table className="table">
						<thead>
							<tr>
								<th scope="col">รหัสนิสิต</th>
								<th scope="col">ชื่อ</th>
								<th scope="col">คณะ</th>
								<th scope="col">สาขา</th>
								<th scope="col">ปีที่</th>
								<th scope="col">ตารางเรียน</th>
								<th scope="col">ข้อมูลส่วนตัว</th>
							</tr>
						</thead>
						<tbody>
							{userSubmit}
						</tbody>
					</table>
				</div>
			)
		} else {
			return (
				<div className='d-flex justify-content-center'>
					<h4>ยังไม่มีผู้จองห้องนี้</h4>
				</div>
			)
		}
	}

	const roomState = (state) => {
		if (state) {
			return (
				<span>ว่าง</span>
			)
		} else {
			return (
				<span>เต็ม</span>
			)
		}
	}


	const ShowButton = (state) => {
		if (state) {
			return (
				<Link className="col-md-6 btn btn-outline-success profile-button" to='/user/bookstate'>คุณได้ทำการจองห้องไปแล้ว กดเพื่อดูรายละเอียด</Link>
			)
		} else {
			return (
				<button className="col-md-6 btn btn-outline-primary profile-button" onClick={()=>{onSubmit();onChangeBookState()}}>ยืนยันการจองห้อง</button>
			)
		}
	}

	return (
		<div>
			<NavbarUser />
			<div className='container py-5'>
				<div className="row">
					<div className="d-flex justify-content-between align-items-center experience">
						<h3>รายละเอียดห้องพัก</h3>
						<button className="btn btn-outline-secondary" onClick={() => navigate(-1)}>ย้อนกลับ</button>
					</div><br />
				</div><hr />
				<h4></h4>
				<div className='row'>
					<div className='col-lg-6'>
						<img width='100%' height='400px' src={room.images} />
					</div>
					<div className='col-lg-6'>
						<div className="card mb-4">
							<div className="card-body">
								<div className="row">
									<div className="col-sm-4"><p className="mb-0">ชื่อหอพัก</p></div>
									<div className="col-sm-8"><p className="text-muted mb-0">{dorm.name}</p></div>
								</div><hr />
								<div className="row">
									<div className="col-sm-4"><p className="mb-0">หมายเลขห้องพัก</p></div>
									<div className="col-sm-8"><p className="text-muted mb-0">{room.roomID}</p></div>
								</div><hr />
								<div className="row">
									<div className="col-sm-4"><p className="mb-0">ตำเเหน่งของห้อง</p></div>
									<div className="col-sm-8"><p className="text-muted mb-0">ชั้น {room.floor} ห้องที่ {room.room}</p></div>
								</div><hr />
								<div className="row">
									<div className="col-sm-4"><p className="mb-0">ประเภทของห้อง</p></div>
									<div className="col-sm-8"><p className="text-muted mb-0">{room.roomtype}</p></div>
								</div><hr />
								<div className="row">
									<div className="col-sm-4"><p className="mb-0">จำนวนผู้อยู่อาศัย</p></div>
									<div className="col-sm-8"><p className="text-muted mb-0">{room.member}คน/ห้อง</p></div>
								</div><hr />
								<div className="row">
									<div className="col-sm-4"><p className="mb-0">ราคา/คน</p></div>
									<div className="col-sm-8"><p className="text-muted mb-0">{room.price} บาท</p></div>
								</div><hr />
								<div className="row">
									<div className="col-sm-4"><p className="mb-0">สถานะของห้อง</p></div>
									<div className="col-sm-8"><p className="text-muted mb-0">{roomState(room.roomState)}</p></div>
								</div>
							</div>
						</div>
					</div>
				</div><br />
				<h4>ข้อมูลการจองห้อง หมายเลข {room.roomID}</h4>
				<h4>จำนวนผู้จองห้อง {bookMember} คน สถานะ {roomState(room.roomState)} </h4><hr /><br />
				<ShowData />
				<br /><hr />
				<div className='d-flex justify-content-center'>
					{ShowButton(userdata.bookedState)}
				</div>
			</div>
		</div>
	)
}

export default UserDormRoomDetail