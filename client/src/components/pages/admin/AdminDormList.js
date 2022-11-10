import React, { useState, useEffect } from 'react'
import NavbarAdmin from '../../layouts/NavbarAdmin'
import { Link, useNavigate } from "react-router-dom";

// function
import { listDorm, deleteDorm } from '../../functions/dorm'

// redux
import { useSelector } from 'react-redux';

const AdminDormList = () => {
	const navigate = useNavigate()
	const { user } = useSelector((state) => ({ ...state }))
	const [dorm, setDorm] = useState([])

	useEffect(() => {
    loadData(user.token)
  }, [])

  const loadData = (authtoken) => {
    listDorm(authtoken)
      .then((res) => {
        setDorm(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

	const handleRemove = (id) => {
    deleteDorm(user.token, id)
      .then((res) => {
        console.log(res)
        alert('ลบหอพักสำเร็จ')
        window.location.reload();
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
						<h3>รายชื่อหอพักทั้งหมด</h3>
						<Link className="btn btn-outline-success" to='/admin/create-dorm'>หน้าเพิ่มหอพัก</Link>
					</div><br />
				</div><hr />
				<div className="row px-5">
					{dorm.map((item)=>
						<div style={{ cursor: "pointer" }} className="card col-sm-4 mt-5 nav-link" key={item._id} onClick={() => navigate(`/admin/dorm/${item._id}`)}>
							<img height='250px' src={item.dormImg} className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">{item.name}</h5><hr/>
								<p className="card-text">ประเภท หอ{item.dormType}</p>
								<p className="card-text">จำนวนชั้นทั้งหมด {item.dormFloor} ชั้น</p>
								<p className="card-text">ชั้นละ {item.dormRoom} ห้อง</p>
								<div className="d-flex justify-content-between">
									<button className="btn btn-outline-warning" onClick={(e) => {e.stopPropagation();navigate(`/admin/update-dorm/${item._id}`);}}>เเก้ไขข้อมูลหอพัก</button>
									<button className="btn btn-outline-danger" onClick={(e)=>{e.stopPropagation();handleRemove(item._id);}}>ลบหอพัก</button>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default AdminDormList