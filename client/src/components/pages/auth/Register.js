import React, { useState } from 'react'
// functions
import { register } from '../../functions/auth'
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate()
  const [indexMajor, setIndexMajor] = useState(0);
  const [majorI, setMajorI] = useState("");
  const facultys = ["", "วิศวกรรมศาสตร์", "วิทยาการจัดการ", "วิทยาศาสตร์", "เศรษฐศาสตร์", "พาณิชยนาวี"]
  const majors = [[""],
  ["เครื่องกลและระบบการผลิต", "คอมพิวเตอร์และสารสนเทศศาสตร์", "เครื่องกลและการออกแบบ", "โยธา", "ไฟฟ้าและอิเล็กทรอนิกส์", "อุตสาหการและระบบ", "หุ่นยนต์และระบบ"],
  ["การจัดการ", "การตลาด", "ธุรกิจระหว่างระเทศ", "การจัดการโรงแรมและท่องเที่ยว", "การบัญชีบริหาร", "การจัดการโลจิสติกส์", "การเงินและการลงทุน"],
  ["คณิตศาสตร์ประยุกต์", "เคมี", "เทคโนโลยีสารสนเทศ", "ฟิสิกส์", "วิทยาการคอมพิวเตอร์", "วิทยาศาสตร์และเทคโนโลยีสิ่งแวดล้อม"],
  ["เศรษฐศาสตร์", "เศรษฐศาสตร์ประยุกต์"],
  ["วิศวกรรมต่อเรือและเครื่องกลเรือ", "วิทยาศาสตร์การเดินเรือ", "การขนส่งทางทะเล"]
  ]
  const [value, setValue] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    c_password: "",
    address: "",
    phone: "",
    studentID: "",
    gender: "",
    classYear: "",
    faculty: "",
    major: "",
    identity: "",
  })

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    })
  }

  const setMajor = (faculty) => {
    const index = facultys.findIndex(val => val === faculty)
    setIndexMajor(index)
    setMajorI("")
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(value)
    if (value.password !== value.c_password) {
      alert('Password not match')
    } else {
      //code
      register(value)
        .then(res => {
          console.log(res)
          alert(res.data)
          navigate('/')
        }).catch(err => {
          console.log(err.response.data)
          alert(err.response.data)
        })
    }
  }
  return (
    <div className="main-container d-flex">
      <div className="content bg-white">
        <div className="row">
          <div className="col-md-6 border-right">
            <img width="100%" height="100%" src="https://www.gannett-cdn.com/presto/2018/08/12/USAT/3215d680-a473-49c5-9c6e-47816f0dc75b-AP_Homes_Packing_For_College.JPG" />
          </div>
          <div className="col-md-6">
            <div className="p-5 py-5">
              <div className="text-center">
                <h4>หน้าสมัครสมาชิก</h4><hr />
              </div>
              <form onSubmit={handleSubmit}>
                <div className="row mt-2">
                  <div className="col-md-6">
                    <label className="col-form-label">ชื่อ (First name)</label><input type="text" className="form-control" placeholder="First name" name="firstname" required onChange={handleChange} />
                  </div>
                  <div className="col-md-6">
                    <label className="col-form-label">นามสกุล (Last name)</label><input type="text" className="form-control" placeholder="Last name" name="lastname" required onChange={handleChange} />
                  </div>
                </div>
                <div className="col-md-12">
                  <label className="col-form-label">ชื่อผู้ใช้งาน (Username)</label>
                  <input type="text" className="form-control" name="username" placeholder="Username" required onChange={handleChange} />
                </div>
                <div className="col-md-12">
                  <label className="col-form-label">อีเมล (Email)</label>
                  <input type="email" className="form-control" name="email" aria-describedby="email" placeholder="Email" required onChange={handleChange} />
                </div>
                <div className="col-md-12">
                  <label className="col-form-label">รหัสผ่าน (Password)</label>
                  <input type="password" className="form-control" name="password" placeholder="Password" required onChange={handleChange} />
                </div>
                <div className="col-md-12">
                  <label className="col-form-label">ยืนยันรหัสผ่าน (Confirm Password)</label>
                  <input type="password" className="form-control" name="c_password" placeholder="Confirm Password" required onChange={handleChange} />
                </div>
                <div class="col-md-12">
                  <label class="col-form-label">ที่อยู่ (Address)</label>
                  <textarea class="form-control" placeholder="Address" name="address" required onChange={handleChange}></textarea>
                </div>
                <div className="col-md-12">
                  <label className="col-form-label">เบอร์โทรศัพท์ (Phone)</label>
                  <input type="text" className="form-control" name="phone" placeholder="Phone" required onChange={handleChange} />
                </div>
                <div className="col-md-12">
                  <label className="col-form-label">รหัสนิสิต (StudentID)</label>
                  <input type="text" className="form-control" name="studentID" placeholder="StudentID" required onChange={handleChange} />
                </div>
                <div className="col-md-12">
                  <label className="col-form-label">เพศ (Gender)</label>
                  <select className="form-select" name="gender" aria-label="Default select example" required onChange={handleChange}>
                    <option value="">{""}</option>
                    <option value="ชาย">ชาย</option>
                    <option value="หญิง">หญิง</option>
                  </select>
                </div>
                <div className="col-md-12">
                  <label className="col-form-label">ชั้นปีที่ (Class)</label>
                  <select className="form-select" name="classYear" aria-label="Default select example" required onChange={handleChange}>
                    <option value="">{""}</option>
                    <option value="1">ปี1</option>
                    <option value="2">ปี2</option>
                    <option value="3">ปี3</option>
                    <option value="4">ปี4</option>
                    <option value="4">มากกว่าปี4</option>
                  </select>
                </div>
                <div class="col-md-12">
                  <label className="col-form-label">คณะ (Faculty)</label>
                  <select className="form-select" name="faculty" aria-label="Default select example" required onChange={(e) => { setMajor(e.target.value); handleChange(e) }}>
                    {facultys.map((val) => {
                      return <option value={val}>{val}</option>
                    })}
                  </select>
                </div>
                <div className="col-md-12">
                  <label className="col-form-label">สาขา (Major)</label>
                  <select className="form-select" name="major" aria-label="Default select example" required onChange={handleChange}>
                    <option value="">{""}</option>
                    {majors[indexMajor].map((val) => {
                      return <option value={val}>{val}</option>
                    })}
                  </select>
                </div>
                <div class="col-md-12">
                  <label class="col-form-label">สิ่งที่ผู่เช่าคนอื่นควรรู้เกี่ยวกับตัวเอง (Identity)</label>
                  <textarea class="form-control" placeholder="Identity" name="identity" required onChange={handleChange}></textarea>
                </div>
                <div className="d-flex justify-content-between">
                  <Link className="mt-4 col-md-5 btn btn-outline-secondary profile-button" to="/">ย้อนกลับ</Link>
                  <button className="mt-4 col-md-5 btn btn-outline-success profile-button">สมัครสมาชิก</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register