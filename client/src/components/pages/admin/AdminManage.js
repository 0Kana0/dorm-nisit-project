import { Switch } from 'antd'
import React, { useState, useEffect } from 'react'
import NavbarAdmin from '../../layouts/NavbarAdmin'
import { useSelector } from 'react-redux'
// function
import { listUsers } from '../../functions/user'

const AdminManage = () => {
  const {user} = useSelector((state)=>({...state}))
  const [data, setData] = useState([])
  console.log("data",data)
  useEffect(()=>{
    // code
    loadData(user.token)
  },[]);
  const loadData = (authtoken) => {
    // code
    listUsers(authtoken)
    .then(res=>{
      // code
      setData(res.data)  
    }).catch(err=>{
      console.log(err)
    })
  }
  const handleOnchange = (e,id) => {
    console.log(e,id)
  }
  return (
    <div>
      <div className="container mt-5 mb-5 col-md-10">
        <h3>AdminManage</h3><hr/>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">username</th>
              <th scope="col">role</th>
              <th scope="col">created</th>
              <th scope="col">updated</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item,index)=>(
              <tr>
                <td>{item.username}</td>
                <td>{item.role}</td>
                <td>{item.createdAt}</td>
                <td>{item.updatedAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AdminManage