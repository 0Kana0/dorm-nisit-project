import React, { useState, useEffect } from 'react'
import NavbarAdmin from '../../layouts/NavbarAdmin'
import { Link, useNavigate } from "react-router-dom";

// function
import { createDorm, listDorm, deleteDorm } from '../../functions/dorm'

// redux
import { useSelector } from 'react-redux';

const AdminCreateDorm = () => {
  const navigate = useNavigate()
  const { user } = useSelector((state) => ({ ...state }))

  const [values, setValues] = useState({
    name: "",
    dormType: "",
    dormFloor: "",
    dormRoom: "",
    dormImg: ""
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
        alert('เพิ่มบิลค่าไฟสำเร็จ')
        navigate('/admin/bill')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
      <div className='container py-5'>
        <div className="row">
          <div className="d-flex justify-content-between align-items-center experience">
            <h3>เพิ่มบิลค่าไฟ</h3>
            <Link className="btn btn-outline-secondary" to='/admin/bill'>ย้อนกลับ</Link>
          </div><br />
        </div><hr />
        <form onSubmit={handleSubmit}>
          <div className="form-group px-5">
            <div className="col-md-12">
              <label className="col-form-label">เลขห้องพัก</label>
              <input type="text" className="form-control" name="dormNum" value={values.name} placeholder="กรุณากรอกเลขห้องพัก" required onChange={handleChangeDorm} />
            </div>
            <div className="col-md-12">
              <label className="col-form-label">วันที่ออกบิล</label>
              {/* <select className="form-select" name="dormType" aria-label="Default select example" required onChange={handleChangeDorm}>
                <option value="">{""}</option>
                <option value="ชาย">ชาย</option>
                <option value="หญิง">หญิง</option>
              </select> */}
              <input type="text" className="form-control" name="billDate" value={values.name} placeholder="ex. 1 มกราคม 25XX" required onChange={handleChangeDorm} />
            </div>
            <div className="col-md-12">
              <label className="col-form-label">ค่าน้ำ</label>
              <input type="text" className="form-control" name="water" value={values.dormFloor} placeholder="" required onChange={handleChangeDorm} />
            </div>
            <div className="col-md-12">
              <label className="col-form-label">ค่าไฟ</label>
              <input type="text" className="form-control" name="elec" value={values.dormRoom} placeholder="" required onChange={handleChangeDorm} />
            </div>
            {/* <div className="col-md-12">
              <label className="col-form-label">รูปของหอพัก</label>
              <input type="text" className="form-control" name="dormImg" value={values.dormImg} placeholder="รูปของหอพัก" required onChange={handleChangeDorm} />
            </div> */}
            <div className='d-flex justify-content-center'>
              <button className="mt-5 col-md-6 btn btn-outline-primary profile-button">เพิ่มบิลค่าไฟสำเร็จ</button>
            </div>
          </div><br />
        </form><hr />
      </div>
  )
}

export default AdminCreateDorm