import React, { useState, useEffect } from 'react'
import NavbarAdmin from '../../layouts/NavbarAdmin'
import { Link, useNavigate } from "react-router-dom";

// redux
import { useSelector } from 'react-redux'

// function
import { readUsers } from '../../functions/user'

const AdminDashboard = () => {
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
  return (
    <div>
      <section>
        <div className='container py-5'>
          <div className="row">
            <div className="d-flex justify-content-between align-items-center experience">
              <h3>ข้อมูลส่วนตัว</h3>
              <Link className="btn btn-outline-secondary" to='/user/index'>ย้อนกลับ</Link>
            </div><br />
          </div><hr />
          <div className='row'>
            <div className='col-lg-4'>
              <div className="card mb-4">
                <div className="card-body text-center">
                  <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" width='150px' alt="avatar" className="rounded-circle img-fluid" />
                  <h5 className="my-3">{userdata.firstname} {userdata.lastname}</h5>
                  <p className="text-muted mb-1">คณะ{userdata.faculty}</p>
                  <p className="text-muted mb-4">สาขา{userdata.major}</p>
                </div>
              </div>
            </div>
            <div className='col-lg-8'>
              <div className="card mb-4">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-4"><p className="mb-0">ชื่อผู้ใช้งาน (Username)</p></div>
                    <div className="col-sm-8"><p className="text-muted mb-0">{userdata.username}</p></div>
                  </div><hr />
                  <div className="row">
                    <div className="col-sm-4"><p className="mb-0">ชื่อ (First name)</p></div>
                    <div className="col-sm-8"><p className="text-muted mb-0">{userdata.firstname}</p></div>
                  </div><hr />
                  <div className="row">
                    <div className="col-sm-4"><p className="mb-0">นามสกุล (Last name)</p></div>
                    <div className="col-sm-8"><p className="text-muted mb-0">{userdata.lastname}</p></div>
                  </div><hr />
                  <div className="row">
                    <div className="col-sm-4"><p className="mb-0">อีเมล (Email)</p></div>
                    <div className="col-sm-8"><p className="text-muted mb-0">{userdata.email}</p></div>
                  </div><hr />
                  <div className="row">
                    <div className="col-sm-4"><p className="mb-0">ที่อยู่ (Address)</p></div>
                    <div className="col-sm-8"><p className="text-muted mb-0">{userdata.address}</p></div>
                  </div><hr />
                  <div className="row">
                    <div className="col-sm-4"><p className="mb-0">เบอร์โทรศัพท์ (Phone)</p></div>
                    <div className="col-sm-8"><p className="text-muted mb-0">{userdata.phone}</p></div>
                  </div><hr />
                  <div className="row">
                    <div className="col-sm-4"><p className="mb-0">รหัสนิสิต (StudentID)</p></div>
                    <div className="col-sm-8"><p className="text-muted mb-0">{userdata.studentID}</p></div>
                  </div><hr />
                  <div className="row">
                    <div className="col-sm-4"><p className="mb-0">เพศ (Gender)</p></div>
                    <div className="col-sm-8"><p className="text-muted mb-0">{userdata.gender}</p></div>
                  </div><hr />
                  <div className="row">
                    <div className="col-sm-4"><p className="mb-0">ชั้นปีที่ (Class)</p></div>
                    <div className="col-sm-8"><p className="text-muted mb-0">{userdata.classYear}</p></div>
                  </div><hr />
                  <div className="row">
                    <div className="col-sm-4"><p className="mb-0">คณะ (Faculty)</p></div>
                    <div className="col-sm-8"><p className="text-muted mb-0">{userdata.faculty}</p></div>
                  </div><hr />
                  <div className="row">
                    <div className="col-sm-4"><p className="mb-0">สาขา (Major)</p></div>
                    <div className="col-sm-8"><p className="text-muted mb-0">{userdata.major}</p></div>
                  </div><hr />
                  <div className="row">
                    <div className="col-sm-4"><p className="mb-0">สิ่งที่ผู่เช่าคนอื่นควรรู้เกี่ยวกับตัวเอง (Identity)</p></div>
                    <div className="col-sm-8"><p className="text-muted mb-0">{userdata.identity}</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AdminDashboard