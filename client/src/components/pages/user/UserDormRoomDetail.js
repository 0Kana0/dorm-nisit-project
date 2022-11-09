import React, { useState, useEffect } from 'react'
import NavbarUser from '../../layouts/NavbarUser'
import { Link, useParams, useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap'

// function
import { listDormRoomID } from '../../functions/dormRoom'
import { createSubmit, listSubmit } from '../../functions/submit';

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
	const [users,setUsers] = useState([])

	useEffect(() => {
		loadData(user.token, param.id)
		loadDataSubmit(user.token, param.id)
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

	const userSubmit = submit.map((item)=>{
		return (
			<tr>
				<th scope="col">{item.user.studentID}</th>
				<td>{item.user.firstname} {item.user.lastname}</td>
				<td>{item.user.faculty}</td>
				<td>{item.user.major}</td>
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
				<div className="col-sm-8"><p className="text-muted mb-0">ว่าง</p></div>
			)
		} else {
			return (
				<div className="col-sm-8"><p className="text-muted mb-0">เต็ม</p></div>
			)
		}
	}

	const onSubmit = (e) => {
		e.preventDefault()
		console.log(user.id)
		console.log(param.id)
		createSubmit(user.token,{
			dormroom:param.id,
			user:user.id
		}).then(()=>{
			loadDataSubmit(user.token, param.id)
			toast('จองห้องเสร็จสิ้นแล้ว')
		})
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
									{roomState(room.roomState)}
								</div>
							</div>
						</div>
					</div>
				</div><br />
				<h4>ข้อมูลการจองห้อง หมายเลข {room.roomID}</h4><hr /><br />
				<ShowData />
				<br /><hr />
				<div className='d-flex justify-content-center'>
					{
						submit.find((item)=>item.user._id === user.id) === undefined ?
							<Button className="profile-button" variant="outline-primary" onClick={onSubmit}>จองห้อง</Button> :
							<Button className="profile-button" variant="outline-success" onClick={()=>toast('มีรายชื่ออยู่ในระบบจองแล้ว')}>จองแล้ว</Button>
					}
				</div>
			</div>
		</div>
	)
}

export default UserDormRoomDetail