import React, { useState, useEffect } from 'react'
import NavbarUser from '../../layouts/NavbarUser'
import NavUserDashboard from '../../layouts/NavUserDashboard';
import { Link, useNavigate } from "react-router-dom";

// redux
import { useSelector } from 'react-redux'

// function
import { readUsers, updateUsers } from '../../functions/user'

const UserProfileEdit = () => {
	const navigate = useNavigate()
	const [indexMajor, setIndexMajor] = useState(0);
	const [majorI, setMajorI] = useState("");
	const facultys = ["", "วิศวกรรมศาสตร์", "วิทยาการจัดการ", "วิทยาศาสตร์", "เศรษฐศาสตร์", "พาณิชยนาวี"]
	const majors = [[""],
	["เครื่องกลและระบบการผลิต", "คอมพิวเตอร์และสารสนเทศศาสตร์", "เครื่องกลและการออกแบบ", "โยธา", "ไฟฟ้าและอิเล็กทรอนิกส์", "อุตสาหการและระบบ", "หุ่นยนต์และระบบ"],
	["การจัดการ", "การตลาด", "ธุรกิจระหว่างระเทศ", "การจัดการโรงแรมและท่องเที่ยว", "การบัญชีบริหาร", "การจัดการโลจิสติกส์", "การเงินและการลงทุน"],
	["คณิตศาสตร์ประยุกต์", "เคมี", "เทคโนโลยีสารสนเทศ", "ฟิสิกส์", "วิทยาการคอมพิวเตอร์", "วิทยาศาสตร์และเทคโนโลยีสิ่งแวดล้อม"],
	["เศรษฐศาสตร์", "เศรษฐศาสตร์ประยุกต์"],
	["วิศวกรรมต่อเรือและเครื่องกลเรือ", "วิทยาศาสตร์การเดินเรือ", "การขนส่งทางทะเล"]
	]
	const { user } = useSelector((state) => ({ ...state }))
	const [userdata, setUserdata] = useState([])
	console.log(user.id)
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

	const setMajor = (faculty) => {
		const index = facultys.findIndex(val => val === faculty)
		setIndexMajor(index)
		setMajorI("")
	}

	const handleChange = (e) => {
		setUserdata({
			...userdata,
			[e.target.name]: e.target.value,
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		updateUsers(user.token, user.id, userdata)
			.then((res) => {
				console.log(res)
				alert('เเก้ไขข้อมูลสำเร็จ')
				navigate('/user/dashboard')
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
						<h3>เเก้ไขข้อมูลส่วนตัว</h3>
						<Link className="btn btn-outline-secondary" to='/user/dashboard'>ย้อนกลับ</Link>
					</div><br />
				</div><hr />
				<form onSubmit={handleSubmit}>
					<div className="row">
						<div className="col-md-6">
							<div className="row">
								<div className="col-md-6">
									<label className="col-form-label">ชื่อ (First name)</label><input type="text" className="form-control" placeholder="First name" name="firstname" required value={userdata.firstname} onChange={handleChange} />
								</div>
								<div className="col-md-6">
									<label className="col-form-label">นามสกุล (Last name)</label><input type="text" className="form-control" placeholder="Last name" name="lastname" required value={userdata.lastname} onChange={handleChange} />
								</div>
							</div>
							<div className="col-md-12">
								<label className="col-form-label">ชื่อผู้ใช้งาน (Username)</label>
								<input type="text" className="form-control" name="username" placeholder="Username" required value={userdata.username} onChange={handleChange} />
							</div>
							<div className="col-md-12">
								<label className="col-form-label">อีเมล (Email)</label>
								<input type="email" className="form-control" name="email" aria-describedby="email" placeholder="Email" required value={userdata.email} onChange={handleChange} />
							</div>
							<div class="col-md-12">
								<label class="col-form-label">ที่อยู่ (Address)</label>
								<textarea class="form-control" placeholder="Address" name="address" required value={userdata.address} onChange={handleChange}></textarea>
							</div>
							<div className="col-md-12">
								<label className="col-form-label">เบอร์โทรศัพท์ (Phone)</label>
								<input type="text" className="form-control" name="phone" placeholder="Phone" required value={userdata.phone} onChange={handleChange} />
							</div>
							<div className="col-md-12">
								<label className="col-form-label">รหัสนิสิต (StudentID)</label>
								<input type="text" className="form-control" name="studentID" placeholder="StudentID" required value={userdata.studentID} onChange={handleChange} />
							</div>
							<div className='d-flex justify-content-center'>
								<button className="mt-5 col-md-6 btn btn-outline-primary profile-button">เเก้ไขข้อมูลหอพัก</button>
							</div>
						</div>
						<div className="col-md-6"> 
							<div className="col-md-12">
								<label className="col-form-label">เพศ (Gender)</label>
								<select className="form-select" name="gender" aria-label="Default select example" required value={userdata.gender} onChange={handleChange}>
									<option value="">{""}</option>
									<option value="ชาย">ชาย</option>
									<option value="หญิง">หญิง</option>
								</select>
							</div>
							<div className="col-md-12">
								<label className="col-form-label">ชั้นปีที่ (Class)</label>
								<select className="form-select" name="classYear" aria-label="Default select example" required value={userdata.classYear} onChange={handleChange}>
									<option value="">{""}</option>
									<option value="1">ปี1</option>
									<option value="2">ปี2</option>
									<option value="3">ปี3</option>
									<option value="4">ปี4</option>
									<option value="4">มากกว่าปี4</option>
								</select>
							</div>
							<div class="col-md-12">
								<label className="col-form-label">คณะ (Faculty)</label>
								<select className="form-select" name="faculty" aria-label="Default select example" required onChange={(e) => { setMajor(e.target.value); handleChange(e) }}>
									{facultys.map((val) => {
										return <option value={val}>{val}</option>
									})}
								</select>
							</div>
							<div className="col-md-12">
								<label className="col-form-label">สาขา (Major)</label>
								<select className="form-select" name="major" aria-label="Default select example" required value={userdata.major} onChange={handleChange}>
									<option value="">{""}</option>
									{majors[indexMajor].map((val) => {
										return <option value={val}>{val}</option>
									})}
								</select>
							</div>
							<div class="col-md-12">
								<label class="col-form-label">สิ่งที่ผู่เช่าคนอื่นควรรู้เกี่ยวกับตัวเอง (Identity)</label>
								<textarea class="form-control" placeholder="Identity" name="identity" required value={userdata.identity} onChange={handleChange}></textarea>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	)
}

export default UserProfileEdit