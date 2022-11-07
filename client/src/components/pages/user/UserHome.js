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
      <NavbarUser/>
      <h1>Welcome {userdata.firstname}</h1>
    </div>
  )
}

export default UserHome