import React, { useState, useEffect } from 'react'
import NavbarAdmin from '../../layouts/NavbarAdmin'
import { useSelector } from 'react-redux'

// function
import { createDormRoom } from '../../functions/dormRoom'
import { listDorm } from '../../functions/dorm'

const initialstate = {
	dorms: [],
	dorm: "",
	roomID: "",
	floor: "",
	room: "",
	roomtype: "",
	price: "",
	images: [],
}

const AdminCreateDormRoom = () => {
	const { user } = useSelector((state) => ({ ...state }))
	const [values, setValues] = useState(initialstate)

	useEffect(() => {
		loadData(user.token)
	}, [])

	const loadData = (authtoken) => {
		listDorm(authtoken)
			.then((res) => {
				setValues({ ...values, dorms: res.data })
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
			})
			.catch((err) => {
				console.log(err)
			})
	}

	return (
		<div>
			<NavbarAdmin />
			<div className='container'>
				<h3>เพิ่มห้องพัก</h3>
				<form onSubmit={handleSubmit}>
					<div className='form-group'>
						<div class="col-md-6">
							<label className="col-form-label">ชื่อหอพัก</label>
							<select className="form-select" name="dorm" aria-label="Default select example" required onChange={handleChangeDorm} >
								<option value="">{""}</option>
								{values.dorms.length > 0 && values.dorms.map((val) => {
                  return <option key={val._id} value={val._id}>{val.name}</option>
                })}
							</select>
						</div>
						<div className="col-md-6">
							<label className="col-form-label">หมายเลขห้อง</label>
							<input type="text" className="form-control" name="roomID" placeholder="หมายเลขห้อง" required value={values.roomID} onChange={handleChangeDorm} />
						</div>
						<div className="col-md-6">
							<label className="col-form-label">ชั้นที่</label>
							<input type="text" className="form-control" name="floor" placeholder="ชั้นที่" required value={values.floor} onChange={handleChangeDorm} />
						</div>
						<div className="col-md-6">
							<label className="col-form-label">ห้องที่</label>
							<input type="text" className="form-control" name="room" placeholder="ห้องที่" required value={values.room} onChange={handleChangeDorm} />
						</div>
						<div className="col-md-6">
							<label className="col-form-label">ราคาห้อง</label>
							<input type="text" className="form-control" name="price" placeholder="ราคาห้อง" required value={values.price} onChange={handleChangeDorm} />
						</div>
						<button className="mt-4 col-md-6 btn btn-outline-primary profile-button">เพิ่มห้องพัก</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default AdminCreateDormRoom