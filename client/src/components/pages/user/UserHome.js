import React, { useState, useEffect } from 'react'
import NavbarUser from '../../layouts/NavbarUser'
// redux
import { useSelector } from 'react-redux'

// function
import { readUsers } from '../../functions/user'

const UserHome = () => {
  const {user} = useSelector((state)=>({...state}))
  const [userdata, setUserdata] = useState([])
  console.log(user.id)
  useEffect(() => {
    loadData(user.token,user.id)
  }, [])

  const loadData = (authtoken,id) => {
    readUsers(authtoken,id)
      .then((res) => {
        setUserdata(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <div>
			<NavbarUser />
      <head>
      </head>
			<div className='container py-5'>
				<div className="row">
					<div className="d-flex justify-content-between align-items-center experience">
						<h2>หอพักนิสิตมหาวิทยาลัยเกษตรศาสตร์ วิทยาเขต ศรีราชา</h2> 
					</div>
          <div className="d-flex justify-content-between align-items-center experience">
						<h3 className="userhome-h3">Student Dormitory Kasetsert University Si Ra Cha Campus</h3> 
					</div>
          <br />
				</div><hr />
        <div className="row2">
          <div className="d-flex justify-content-between align-items-center experience">
            <h4>ข่าวสารประชาสัมพันธ์</h4>
          </div>
        </div>
        <div className="row3">
          <div className="d-flex justify-content-between align-items-center experience">
            <a href="" target="">1. แนวปฏิบัติการพักอาศัยหอพักนิสิตวิทยาเขตศรีราชา ประจำภาคปลาย ปี 2565</a>
          </div>
          <div className="d-flex justify-content-between align-items-center experience">
            <a href="" target="">2. ระบบจองห้องพักนิสิต ภาคปลาย ปี 2565</a>
          </div>
          <div className="d-flex justify-content-between align-items-center experience">
            <a href="" target="">3. ตารางการจดมิเตอร์น้ำประปา ไฟฟ้า และกำหนดชำระเงินภาคต้น</a>
          </div>
          <div className="d-flex justify-content-between align-items-center experience">
            <a href="" target="">4. ขอคืนค่าประกันของเสียหาย หอพักนิสิตมหาวิทยาลัยเกษตรศาสตร์ วิทยาเขต ศรีราชา</a>
          </div>
          <div className="d-flex justify-content-between align-items-center experience">
            <a href="" target="">5. การขอคืนเงินค่าธรรมเนียมหอพักนิสิตมหาวิทยาลัยเกษตรศาสตร์ วิทยาเขต ศรีราชา</a>
          </div>
          <div className="d-flex justify-content-between align-items-center experience">
            <a href="" target="">6. มาตรการป้องกันการแพร่ระบาดโรคติดต่อเชื้อไวรัสโคโรน่า 2019 นิสิตหอพักประจำภาคต้น 2565</a>
          </div>
          <div className="d-flex justify-content-between align-items-center experience">
            <a href="" target="">7. แนวปฏิบัติการพักอาศัยหอพักนิสิตวิทยาเขตศรีราชา ประจำภาคฤดูร้อนปี 2565</a>
          </div>
          <div className="d-flex justify-content-between align-items-center experience">
            <a href="" target="">8. ประชาสัมพันธ์หอ1-8 (ภาคปลาย 64)</a>
          </div>
          <div className="d-flex justify-content-between align-items-center experience">
            <a href="" target="">9. กำหนดวันจองหอพักนิสิต ปี 1 รหัส 65 (สำหรับ TCAS รอบ 2)</a>
          </div>
          <div className="d-flex justify-content-between align-items-center experience">
            <a href="" target="">10. แนวปฏิบัติการพักอาศัยหอพักนิสิตวิทยาเขตศรีราชา ประจำภาคต้นปีการศึกษา 2565</a>
          </div>
          <div className="d-flex justify-content-between align-items-center experience">
            <a href="" target="">11. แนวปฏิบัติการพักอาศัยหอพักนิสิตวิทยาเขตศรีราชา ประจำภาคปลาย ปีการศีกษา 2564</a>
          </div>
          <div className="d-flex justify-content-between align-items-center experience">
            <a href="" target="">12. ขยายเวลาและสิทธิ์การยื่นขอเงินค่าประกันของเสียหายประจำภาคต้นปี 64</a>
          </div>
          <div className="d-flex justify-content-between align-items-center experience">
            <a href="" target="">13. แนวทางการช่วยเหลือนิสิตหอพักมหาวิทยาลัยเกษตรศาสตร์ วิทยาเขตศรีราชาที่ได้รับผลกระทบจากสถานการณ์ไวรัสโคโรนา 2019 ฉบับที่3</a>
          </div>
          <div className="d-flex justify-content-between align-items-center experience">
            <a href="" target="">14. มาตรการรองรับการเข้าพักของนิสิตหอพัก ภาคต้น ปีการศึกษา 2564</a>
          </div>
          <div className="d-flex justify-content-between align-items-center experience">
            <a href="" target="">15. กำหนดยื่นคำร้องขอเงินคืนค่าประกันของเสียหายและเงินตามแนวช่วยเหลือนิสิต COVID-19</a>
          </div>
          <div className="d-flex justify-content-between align-items-center experience">
            <a href="" target="">16. แนวปฏิบัติการพักอาศัยหอพักนิสิตวิทยาเขตศรีราชา ประจำภาคต้น ปีการศีกษา 2564 </a>
          </div>
        </div>


			</div>	
		</div>
  )
}

export default UserHome