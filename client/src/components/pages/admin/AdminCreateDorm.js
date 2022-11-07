import React, { useState, useEffect } from 'react'
import NavbarAdmin from '../../layouts/NavbarAdmin'
import { Link } from "react-router-dom";

// function
import { createDorm, listDorm, deleteDorm } from '../../functions/dorm'

// redux
import { useSelector } from 'react-redux';

const AdminCreateDorm = () => {
  const { user } = useSelector((state)=>({...state}))
  
  const [values, setValues] = useState({
    name: "",
  })
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
        loadData(user.token)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleChangeDorm = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    createDorm(user.token, values)
      .then((res) => {
        console.log(res)
        alert('เพิ่มหอพักสำเร็จ')
        loadData(user.token)
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
            <h3>เพิ่มรายชื่อหอพัก</h3>
            <Link className="btn btn-outline-secondary" to='/admin/dashboard'>ย้อนกลับ</Link>
          </div><br />
        </div><hr />
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="col-md-6">
              <label className="col-form-label">ชื่อหอพัก</label>
              <input type="text" className="form-control" name="name" value={values.name} placeholder="ชื่อหอพัก" onChange={handleChangeDorm} />
            </div>
            <div className='d-flex justify-content-center'>
							<button className="mt-5 col-md-6 btn btn-outline-primary profile-button">เเก้ไขข้อมูลหอพัก</button>
						</div>
          </div>
        </form><hr />
        <ul className="list-group">
          {dorm.map((item) =>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              {item.name}
              <div>
                <span className="badge bg-primary rounded-pill me-2"><Link className="nav-link" to={"/admin/update-dorm/" + item._id}>edit</Link></span>
                <span className="badge bg-primary rounded-pill" onClick={()=>handleRemove(item._id)}>x</span>
              </div>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default AdminCreateDorm