import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate, Outlet } from "react-router-dom";

const NavbarAdmin = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const logout = () => {
    dispatch({
      type: 'LOGOUT',
      payload: null,
    })
    alert('ออกจากระบบ')
    navigate('/')
  }
  return (
    <>
    <nav className="navbar col-md-12 navbar-expand-sm navbar-dark bg-success sticky-top">
      <div className="col-md-1"></div>
      <div className="container-fluid">
        <Link to="/admin/index" className="navbar-brand">ระบบจองหอพัก</Link>
        <div className="collapse navbar-collapse" id="navbarToggle">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to='/admin/dormlist'>จองห้องพัก</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin/utilities">ค่าไฟฟ้า</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">เเจ้งซ่อม</Link>
            </li>
          </ul>
        </div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link me-3" to="/admin/dashboard"><i className="fa-solid fa-user"></i></Link>
          </li>
          <li className="nav-item">
            <a className="nav-link me-3" onClick={logout}><i className="fa-solid fa-right-from-bracket"></i></a>
          </li>
        </ul>
      </div>
      <div className="col-md-1"></div>
    </nav>
    <Outlet/>
    </>
  )
}

export default NavbarAdmin