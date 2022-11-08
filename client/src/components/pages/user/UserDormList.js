import React, { useState, useEffect } from 'react'
import NavbarUser from '../../layouts/NavbarUser'
import { Link } from "react-router-dom";

// function
import { listDorm } from '../../functions/dorm'

// redux
import { useSelector } from 'react-redux';

const UserDormList = () => {
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

	return (
		<div>
			<NavbarUser />
			<div className='container py-5'>
				<div className="row">
					<div className="d-flex justify-content-between align-items-center experience">
						<h3>รายชื่อหอพักทั้งหมด</h3>
					</div><br />
				</div><hr />
				<div className="row px-5">
					{dorm.map((item)=>
						<Link className="card col-sm-4 mt-5 nav-link" key={item._id} to={"/user/dorm/" + item._id}>
							<img height='250px' src={item.dormImg} className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">{item.name}</h5><hr/>
								<p className="card-text">ประเภท หอ{item.dormType}</p>
								<p className="card-text">จำนวนชั้นทั้งหมด {item.dormFloor} ชั้น</p>
								<p className="card-text">ชั้นละ {item.dormRoom} ห้อง</p>
							</div>
						</Link>
					)}
				</div>
			</div>
		</div>
	)
}

export default UserDormList