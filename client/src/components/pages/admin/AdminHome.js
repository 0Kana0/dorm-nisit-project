import React,{useState} from 'react'
import NavbarAdmin from '../../layouts/NavbarAdmin'
import { useSelector } from 'react-redux'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


const AdminHome = () => {
  const {user} = useSelector((state)=>({...state}))
  const [value, onChange] = useState(new Date());
 
  return (
    <div>  
      <div>
      </div>
      <div>
        <div className='hotel'>
      <img className='im' src="https://www.travelwanderlust.co/wp-content/uploads/2020/02/best-time-to-book-a-hotel.jpg" alt="Girl in a jacket" />
      
    </div>
    
    <div className='Calendar'>
      <Calendar onChange={onChange} value={value} />
    </div>
      <div class="container">
  {/* <h2>ประกาศสำคัญ</h2> */}
            
  <table class=" ">
    <thead>
      <tr class='success'>
        <th color='red'>ประกาศสำคัญ</th>
        
      </tr>
    </thead>
    <tbody>
      <tr class="success">
        <td>1. แนวปฏิบัติการพักอาศัยหอพักนิสิตวิทยาเขตศรีราชา ประจำภาคปลาย ปี 2565</td>
        
      </tr>
      <tr>
        <td>2. ระบบจองห้องพักนิสิต ภาคปลาย ปี 2565</td>
        
      </tr>
      <tr>
        <td>3. ตารางการจดมิเตอร์น้ำประปา ไฟฟ้า และกำหนดชำระเงินภาคต้น</td>
        
      </tr>
      <tr>
        <td>4. ขอคืนค่าประกันของเสียหาย หอพักนิสิตมหาวิทยาลัยเกษตรศาสตร์ วิทยาเขต ศรีราชา</td>
        
      </tr>
      <tr>
        <td>5. การขอคืนเงินค่าธรรมเนียมหอพักนิสิตมหาวิทยาลัยเกษตรศาสตร์ วิทยาเขต ศรีราชา</td>
        
      </tr>
      <tr>
        <td>6. มาตรการป้องกันการแพร่ระบาดโรคติดต่อเชื้อไวรัสโคโรน่า 2019 นิสิตหอพักประจำภาคต้น 2565</td>
        
      </tr>
      <tr>
        <td>7. แนวปฏิบัติการพักอาศัยหอพักนิสิตวิทยาเขตศรีราชา ประจำภาคฤดูร้อนปี 2565</td>
        
      </tr>
      <tr>
        <td>8. ประชาสัมพันธ์หอ1-8 (ภาคปลาย 64)</td>
        
      </tr>
      <tr>
        <td>9. กำหนดวันจองหอพักนิสิต ปี 1 รหัส 65 (สำหรับ TCAS รอบ 2)</td>
        
      </tr>
      <tr>
        <td>10. แนวปฏิบัติการพักอาศัยหอพักนิสิตวิทยาเขตศรีราชา ประจำภาคต้นปีการศึกษา 2565</td>
        
      </tr>
      <tr>
        <td>11. แนวปฏิบัติการพักอาศัยหอพักนิสิตวิทยาเขตศรีราชา ประจำภาคปลาย ปีการศีกษา 2564</td>
        
      </tr>
      <tr>
        <td>12. ขยายเวลาและสิทธิ์การยื่นขอเงินค่าประกันของเสียหายประจำภาคต้นปี 64</td>
        
      </tr>
      <tr>
        <td>13. แนวทางการช่วยเหลือนิสิตหอพักมหาวิทยาลัยเกษตรศาสตร์ วิทยาเขตศรีราชาที่ได้รับผลกระทบจากสถานการณ์ไวรัสโคโรนา 2019 ฉบับที่3</td>
        
      </tr>
      <tr>
        <td>14. มาตรการรองรับการเข้าพักของนิสิตหอพัก ภาคต้น ปีการศึกษา 2564</td>
        
      </tr>
      <tr>
        <td>15. กำหนดยื่นคำร้องขอเงินคืนค่าประกันของเสียหายและเงินตามแนวช่วยเหลือนิสิต COVID-19</td>
        
      </tr>
      <tr>
        <td>16. แนวปฏิบัติการพักอาศัยหอพักนิสิตวิทยาเขตศรีราชา ประจำภาคต้น ปีการศีกษา 2564</td>
        
      </tr>
    </tbody>
  </table>
</div>
      </div>
    </div>

  )
}

export default AdminHome