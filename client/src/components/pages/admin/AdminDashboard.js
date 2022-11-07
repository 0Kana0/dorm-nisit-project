import React from 'react'
import NavbarAdmin from '../../layouts/NavbarAdmin'
import { Link, useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div>
      <NavbarAdmin />
      <div className="container">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/admin/create-dorm">หน้าเพิ่มหอพัก</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admin/create-dormroom">หน้าเพิ่มห้องพัก</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default AdminDashboard