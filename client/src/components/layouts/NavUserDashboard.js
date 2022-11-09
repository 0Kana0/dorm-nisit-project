import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";

// redux
import { useSelector } from 'react-redux'

// function
import { readUsers } from '../functions/user'

const NavUserDashboard = () => {
	const { user } = useSelector((state) => ({ ...state }))
	const [userdata, setUserdata] = useState([])

	useEffect(() => {
		loadData(user.token, user.id)
	}, [])

	const loadData = (authtoken, id) => {
		readUsers(authtoken, id)
			.then((res) => {
				setUserdata(res.data)
			})
			.catch((err) => {
				console.log(err)
			})
	}
	return (
		<div className='col-lg-4'>
			<div className="card mb-4">
				<div className="card-body text-center">
					<img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" width='150px' alt="avatar" className="rounded-circle img-fluid" />
					<h5 className="my-3">{userdata.firstname} {userdata.lastname}</h5>
					<p className="text-muted mb-1">คณะ{userdata.faculty}</p>
					<p className="text-muted mb-4">สาขา{userdata.major}</p>
					<div className="d-flex justify-content-center mb-2">
						<Link className="btn btn-outline-primary ms-1" to='/user/dashboard/edit'>เเก้ไขโปรไฟล์</Link>
					</div>
				</div>
			</div>
			<div className="card mb-4 mb-lg-0">
				<div className="card-body p-0">
					<ul className="list-group list-group-flush rounded-3">
						<Link className="list-group-item p-3 nav-link" to='/user/dashboard'>
							<i className="fa-solid fa-user"></i> หน้าข้อมูลส่วนตัว
						</Link>
						<Link className="list-group-item p-3 nav-link" to='/user/bookstate'>
						<i className="fa-solid fa-building"></i> หน้าสถานะการจองหอ
						</Link>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default NavUserDashboard