import React, { useState, useEffect } from 'react'
import NavbarAdmin from '../../layouts/NavbarAdmin'

import { readDorm, editDorm } from '../../functions/dorm'
import { Link, useParams, useNavigate } from 'react-router-dom'

// redux
import { useSelector } from 'react-redux';

const AdminUpdateDorm = () => {
  const { user } = useSelector((state) => ({ ...state }))
  const navigate = useNavigate()
  const param = useParams()

  const [dorm, setDorm] = useState([])
  useEffect(() => {
    loadDataOne(user.token, param.id)
  }, [])

  const loadDataOne = (authtoken, id) => {
    readDorm(authtoken, id)
      .then((res) => {
        setDorm(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleChangeDorm = (e) => {
    setDorm({
      ...dorm,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    editDorm(user.token, param.id, dorm)
      .then((res) => {
        console.log(res)
        alert('เเก้ไขข้อมูลหอพักสำเร็จ')
        navigate('/admin/dormlist')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div>
      <NavbarAdmin />
      <div className='container py-5'>
      <div className="row">
          <div className="d-flex justify-content-between align-items-center experience">
            <h3>เเก้ไขข้อมูลหอพัก</h3>
            <Link className="btn btn-outline-secondary" to='/admin/dormlist'>ย้อนกลับ</Link>
          </div><br />
        </div><hr />
        <form onSubmit={handleSubmit}>
          <div className="form-group px-5">
            <div className="col-md-12">
              <label className="col-form-label">ชื่อหอพัก</label>
              <input type="text" className="form-control" name="name" placeholder="ชื่อหอพัก" value={dorm.name} required onChange={handleChangeDorm} />
            </div>
            <div className="col-md-12">
              <label className="col-form-label">ประเภทของหอ</label>
              <select className="form-select" name="dormType" aria-label="Default select example" value={dorm.dormType} required onChange={handleChangeDorm}>
                <option value="">{""}</option>
                <option value="ชาย">ชาย</option>
                <option value="หญิง">หญิง</option>
              </select>
            </div>
            <div className="col-md-12">
              <label className="col-form-label">จำนวนชั้นทั้งหมด</label>
              <input type="text" className="form-control" name="dormFloor" value={dorm.dormFloor} placeholder="จำนวนชั้นทั้งหมด" required onChange={handleChangeDorm} />
            </div>
            <div className="col-md-12">
              <label className="col-form-label">จำนวนห้องเเต่ละชั้น</label>
              <input type="text" className="form-control" name="dormRoom" value={dorm.dormRoom} placeholder="จำนวนห้องเเต่ละชั้น" required onChange={handleChangeDorm} />
            </div>
            <div className="col-md-12">
              <label className="col-form-label">รูปของหอพัก</label>
              <input type="text" className="form-control" name="dormImg" value={dorm.dormImg} placeholder="รูปของหอพัก" required onChange={handleChangeDorm} />
            </div>
            <div className='d-flex justify-content-center'>
              <button className="mt-5 col-md-6 btn btn-outline-primary profile-button">เเก้ไขข้อมูลหอพักสำเร็จ</button>
            </div>
          </div><br />
        </form><hr />
      </div>
    </div>
  )
}

export default AdminUpdateDorm