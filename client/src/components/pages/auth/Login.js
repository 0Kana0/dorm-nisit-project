import React, { useState, useEffect } from 'react'

import { login } from '../../functions/auth'

// redux
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {user} = useSelector((state)=>({...state}))

  const [value, setValue] = useState({
    username: "",
    password: "",
  })

  useEffect(()=>{
    if (user) {
      roleBaseRedirect(user.role)
    }
  },[user])

  const roleBaseRedirect = (role) => {
    if (role === 'admin') {
      navigate('/admin/index');
    } else {
      navigate('/user/index');
    }
  }

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(value)
    //code
    login(value)
      .then(res => {
        console.log(res.data)
        alert('เข้าสู่ระบบสำเร็จ')
        dispatch({
          type: 'LOGIN',
          payload: {
            token: res.data.token,
            id:res.data.payload.user.id,
            username: res.data.payload.user.username,
            role: res.data.payload.user.role,
          }
        });
        localStorage.setItem('token', res.data.token)
        roleBaseRedirect(res.data.payload.user.role)
      }).catch(err => {
        console.log(err.response.data)
        alert(err.response.data)
      })

  }
  return (
    <div className="main-container d-flex">
      <div className="content bg-white">
        <div className="row">
          <div className="col-md-8 border-right">
            <img width="100%" height="105%" src="https://media.architecturaldigest.com/photos/5b72eaf7e4ca455528fdfa43/master/w_2048,h_1387,c_limit/Studio%20Gang_Campus%20North%20Residential%20Commons_Landscaped%20Commons_by%20Steve%20Hall%20Copyright%20Hedrich%20Blessing.jpg" />
          </div>
          <div className="col-md-4 mt-5">
            <div className="p-5 py-5">
              <div className="text-center">
                <h4>หน้าเข้าสู่ระบบจองหอพัก</h4><hr />
              </div>
              <form onSubmit={handleSubmit}>
                <div className="col-md-12">
                  <label className="col-form-label">ชื่อผู้ใช้งาน (Username)</label>
                  <input type="text" className="form-control" name="username" placeholder="Username" required onChange={handleChange} />
                </div>
                <div className="col-md-12">
                  <label className="col-form-label">รหัสผ่าน (Password)</label>
                  <input type="password" className="form-control" name="password" placeholder="Password" required onChange={handleChange} />
                </div>
                <p className="d-flex flex-row-reverse"><Link className="nav-link mt-2" to="/register">สมัครสมาชิก</Link></p>
                <button className="mt-4 col-md-12 btn btn-outline-primary profile-button">เข้าสู่ระบบ</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login