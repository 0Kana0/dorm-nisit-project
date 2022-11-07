import React from 'react'
import NavbarAdmin from '../../layouts/NavbarAdmin'
import { useSelector } from 'react-redux'

const AdminHome = () => {
  const {user} = useSelector((state)=>({...state}))
  return (
    <div>
      <NavbarAdmin/>
      <h1>Hello {user.username}</h1>
    </div>
  )
}

export default AdminHome