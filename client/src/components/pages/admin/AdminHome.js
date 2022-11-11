import React from 'react'
import NavbarAdmin from '../../layouts/NavbarAdmin'
import { useSelector } from 'react-redux'

const AdminHome = () => {
  const {user} = useSelector((state)=>({...state}))
  return (
    <div>
      <h1>Hello {user.username}</h1>
      <div>แอบรอ pull อยู่นะจ๊ะ แต่เธอไม่ push บ้างเลย</div>
    </div>
  )
}

export default AdminHome