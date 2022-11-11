import React, { useState, useEffect } from 'react'
import NavbarAdmin from '../../layouts/NavbarAdmin'
import { useSelector } from 'react-redux'
import { Link, useParams, useNavigate } from "react-router-dom";

// function
import { createDormRoom } from '../../functions/dormRoom'
import { readDorm } from '../../functions/dorm'

const initialstate = {
	dorms: [],
	dorm: "",
	roomID: "",
	floor: "",
	room: "",
	roomtype: "",
	member: "",
	price: "",
	images: "",
}

const AdminCreateDormRoom = () => {
	const navigate = useNavigate()
	const { user } = useSelector((state) => ({ ...state }))
	const param = useParams()
	const [values, setValues] = useState(initialstate)

	useEffect(() => {
		loadData(user.token, param.id)
	}, [])

	const loadData = (authtoken, id) => {
		readDorm(authtoken, id)
			.then((res) => {
				setValues({ ...values, dorms: res.data, dorm: res.data._id})
			})
			.catch((err) => {
				console.log(err)
			})
	}
	console.log(values.dorms)

	const handleChangeDorm = (e) => {
		setValues({
			...values,
			[e.target.name]: e.target.value,
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		createDormRoom(user.token, values)
			.then((res) => {
				console.log(res)
				alert('เพิ่มห้องพักสำเร็จ')
				navigate(-1)
			})
			.catch((err) => {
				console.log(err)
			})
	}

	return (
		<div>
			<div className='container py-5'>
				<div className="row">
					<div className="d-flex justify-content-between align-items-center experience">
						<h3>เพิ่มห้องพัก</h3>
						<button className="btn btn-outline-secondary" onClick={() => navigate(-1)}>ย้อนกลับ</button>
					</div><br />
				</div><hr />
				<form onSubmit={handleSubmit}>
					<div className='form-group px-5'>
						<div className="col-md-12">
							<label className="col-form-label">ชื่อหอพัก</label>
							<input type="text" className="form-control" placeholder="ชื่อหอพัก" required readOnly value={values.dorms.name} />
						</div>
						<div className="col-md-12">
							<label className="col-form-label">หมายเลขห้อง</label>
							<input type="text" className="form-control" name="roomID" placeholder="หมายเลขห้อง" required value={values.roomID} onChange={handleChangeDorm} />
						</div>
						<div className="col-md-12">
							<label className="col-form-label">ชั้นที่</label>
							<input type="text" className="form-control" name="floor" placeholder="ชั้นที่" required value={values.floor} onChange={handleChangeDorm} />
						</div>
						<div className="col-md-12">
							<label className="col-form-label">ห้องที่</label>
							<input type="text" className="form-control" name="room" placeholder="ห้องที่" required value={values.room} onChange={handleChangeDorm} />
						</div>
						<div className="col-md-12">
              <label className="col-form-label">ประเภทของห้อง</label>
              <select className="form-select" name="roomtype" aria-label="Default select example" value={values.roomtype} required onChange={handleChangeDorm}>
                <option value="">{""}</option>
                <option value="เครื่องปรับอากาศ">เครื่องปรับอากาศ</option>
                <option value="พัดลม">พัดลม</option>
              </select>
            </div>
						<div className="col-md-12">
							<label className="col-form-label">จำนวนผู้อยู่อาศัย</label>
							<input type="text" className="form-control" name="member" placeholder="จำนวนผู้อยู่อาศัย" required value={values.member} onChange={handleChangeDorm} />
						</div>
						<div className="col-md-12">
							<label className="col-form-label">ราคาห้อง</label>
							<input type="text" className="form-control" name="price" placeholder="ราคาห้อง" required value={values.price} onChange={handleChangeDorm} />
						</div>
						<div className="col-md-12">
							<label className="col-form-label">รูปภาพของห้อง</label>
							<input type="text" className="form-control" name="images" placeholder="รูปภาพของห้อง" required value={values.images} onChange={handleChangeDorm} />
						</div>
						<div className='d-flex justify-content-center'>
              <button className="mt-5 col-md-6 btn btn-outline-primary profile-button">เพิ่มห้องพักสำเร็จ</button>
            </div>
					</div><br />
				</form><hr />
			</div>
		</div>
	)
}

export default AdminCreateDormRoom