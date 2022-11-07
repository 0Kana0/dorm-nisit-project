import React, { useState, useEffect } from 'react'
import NavbarAdmin from '../../layouts/NavbarAdmin'

import { readDorm, editDorm } from '../../functions/dorm'
import { useParams, useNavigate } from 'react-router-dom'

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
        navigate('/admin/create-dorm')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div>
      <NavbarAdmin />
      <div className='container'>
        <h3>เเก้ไขข้อมูลหอพัก</h3><hr />
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="col-md-6">
              <label className="col-form-label">ชื่อหอพัก</label>
              <input type="text" className="form-control" name="name" placeholder="ชื่อหอพัก" value={dorm.name} required onChange={handleChangeDorm} />
            </div>
            <button className="mt-4 col-md-6 btn btn-outline-primary profile-button">เเก้ไขข้อมูลหอพัก</button>
          </div>
        </form><hr />
      </div>
    </div>
  )
}

export default AdminUpdateDorm