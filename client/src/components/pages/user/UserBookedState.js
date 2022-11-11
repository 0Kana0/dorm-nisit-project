import React, { useState, useEffect } from 'react'
import NavbarUser from '../../layouts/NavbarUser'
import NavUserDashboard from '../../layouts/NavUserDashboard'
import { Link, useNavigate } from "react-router-dom"

// redux
import { useSelector } from 'react-redux'

// function
import { readUsers, updateUserBookFalse } from '../../functions/user'
import { readSubmit, deleteSubmit } from '../../functions/submit'
import { editRoomStateTrue } from '../../functions/dormRoom'

const UserBookedState = () => {
  const { user } = useSelector((state) => ({ ...state }))
  const [book, setBook] = useState([])
  const [dorm, setDorm] = useState([])
  const [dormroom, setDormroom] = useState([])
  const [userdata, setUserdata] = useState([])

  useEffect(() => {
		loadData(user.token, user.id)
    loadDataBook(user.token, user.id)
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

  const loadDataBook = (authtoken, id) => {
    readSubmit(authtoken, id)
      .then((res) => {
        setBook(res.data)
        setDorm(res.data.dorm)
        setDormroom(res.data.dormroom)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const onSubmit = () => {
		deleteSubmit(user.token, user.id)
			.then((res) => {
        editRoomStateTrue(user.token, dormroom._id)
				console.log(res.data)
				alert('ยกเลิกการจองห้องสำเร็จ')
				window.location.reload();
			})
			.catch((err) => {
				console.log(err)
			})
	}

	const onChangeBookState = () => {
		updateUserBookFalse(user.token, user.id)
			.then((res) => {
				console.log(res.data)
			})
			.catch((err) => {
				console.log(err)
			})
	}

  const showBook = (state) => {
    if (state) {
      return (
        <div className='container py-2'>
          <h4>ข้อมูลการจองห้อง</h4><hr />
          <div className="card mt-5 nav-link" key={book._id}>
              <img height='250px' src={dormroom.images} className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">{dorm.name} ห้อง {dormroom.roomID}</h5><hr/>
								<p className="card-text">ชั้น {dormroom.floor} ห้องที่ {dormroom.room}</p>
								<p className="card-text">ประเภทห้อง {dormroom.roomtype}</p>
								<p className="card-text">จำนวนผู้อยู่อาศัย {dormroom.member}คน/ห้อง</p>
								<p className="card-text">ราคา {dormroom.price} บาท</p>
                <div className='d-flex justify-content-between'>
                  <Link className='btn btn-outline-warning' to={"/user/dorm/room/" + dormroom._id}>ดูรายละเอียดของห้อง</Link>
                  <button className='btn btn-outline-danger' onClick={()=>{onSubmit();onChangeBookState()}}>ยกเลิกการจองห้อง</button>
                </div>
							</div>
						</div>
        </div>
      )
    } else {
      return (
        <div className='d-flex justify-content-center'>
					<h4>ไม่พบข้อมูลการจองห้อง</h4>
				</div>
      ) 
    } 
  }

	return (
		<div>
			<section>
        <div className='container py-5'>
          <div className="row">
            <div className="d-flex justify-content-between align-items-center experience">
              <h3>สถานะการจองหอ</h3>
              <Link className="btn btn-outline-secondary" to='/user/index'>ย้อนกลับ</Link>
            </div><br />
          </div><hr />
          <div className='row'>
            <NavUserDashboard />
            <div className='col-lg-8 align-items-center'>
              {showBook(userdata.bookedState)}
						</div>
          </div>
					<br />
        </div>
      </section>
		</div>
	)
}

export default UserBookedState