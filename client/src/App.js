import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import Register from "./components/pages/auth/Register"
import Login from "./components/pages/auth/Login"
import Home from './components/pages/Home'

//page
import Bill from './components/pages/admin/Bill'

// page admin
import AdminHome from './components/pages/admin/AdminHome'
import AdminManage from './components/pages/admin/AdminManage'
import AdminDashboard from './components/pages/admin/AdminDashboard'
import AdminCreateDorm from './components/pages/admin/AdminCreateDorm'
import AdminUpdateDorm from './components/pages/admin/AdminUpdateDorm'
import AdminCreateDormRoom from './components/pages/admin/AdminCreateDormRoom'
import AdminDormList from './components/pages/admin/AdminDormList'
import AdminDormRoomList from './components/pages/admin/AdminDormRoomList'
import AdminDormRoomDetail from './components/pages/admin/AdminDormRoomDetail'
import AdminUpdateDormRoom from './components/pages/admin/AdminUpdateDormRoom'

// page user
import UserHome from './components/pages/user/UserHome'
import UserDashboard from './components/pages/user/UserDashboard'
import UserProfileEdit from './components/pages/user/UserProfileEdit'
import UserDormList from './components/pages/user/UserDormList'
import UserDormRoomList from './components/pages/user/UserDormRoomList'
import UserDormRoomDetail from './components/pages/user/UserDormRoomDetail'

// functions
import { currentUser } from './components/functions/auth'
import { useDispatch } from 'react-redux'

// Routes
import UserRoute from './components/routes/UserRoute'
import AdminRoute from './components/routes/AdminRoute'

// Navbar
import NavbarAdmin from './components/layouts/NavbarAdmin'

function App() {
  const dispatch = useDispatch()
  const idtoken = localStorage.token
  if (idtoken) {
    currentUser(idtoken)
      .then(res => {
        //code
        console.log(res.data)
        dispatch({
          type: 'LOGIN',
          payload: {
            token: idtoken,
            id: res.data._id,
            username: res.data.username,
            role: res.data.role,
          }
        });
      }).catch(err => {
        //err
        console.log(err)
      })
  }
  return (
    <>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/admin/index" element={
        <AdminRoute>
          <AdminHome />
        </AdminRoute>
      } />
      <Route path="/admin/dashboard" element={
        <AdminRoute>
          <AdminDashboard />
        </AdminRoute>
      } />
      <Route path="/admin/dormlist" element={
        <AdminRoute>
          <AdminDormList />
        </AdminRoute>
      } />
      <Route path="/admin/manage-user" element={
        <AdminRoute>
          <AdminManage />
        </AdminRoute>
      } />
      <Route path="/admin/create-dorm" element={
        <AdminRoute>
          <AdminCreateDorm/>
        </AdminRoute>
      } />
      <Route path="/admin/dorm/:id" element={
        <AdminRoute>
          <AdminDormRoomList />
        </AdminRoute>
      } />
      <Route path="/admin/update-dorm/:id" element={
        <AdminRoute>
          <AdminUpdateDorm/>
        </AdminRoute>
      } />
      <Route path="/admin/create-dormroom/:id" element={
        <AdminRoute>
          <AdminCreateDormRoom/>
        </AdminRoute>
      } />
      <Route path="/admin/dorm/room/:id" element={
        <AdminRoute>
          <AdminDormRoomDetail />
        </AdminRoute>
      } />
      <Route path="/admin/dorm/update-room/:id" element={
        <AdminRoute>
          <AdminUpdateDormRoom/>
        </AdminRoute>
      } />

      <Route path="/user/index" element={
        <UserRoute>
          <UserHome />
        </UserRoute>
      } />
      <Route path="/user/dormlist" element={
        <UserRoute>
          <UserDormList />
        </UserRoute>
      } />
      <Route path="/user/dorm/:id" element={
        <UserRoute>
          <UserDormRoomList />
        </UserRoute>
      } />
      <Route path="/user/dorm/room/:id" element={
        <UserRoute>
          <UserDormRoomDetail />
        </UserRoute>
      } />
      <Route path="/user/dashboard" element={
        <UserRoute>
          <UserDashboard />
        </UserRoute>
      } />
      <Route path="/user/dashboard/edit" element={
        <UserRoute>
          <UserProfileEdit />
        </UserRoute>
      } />
    </Routes>

      <Routes>
        <Route element={
          <AdminRoute>
            <NavbarAdmin/>
          </AdminRoute>
        }>
          <Route path="/admin/bill" element={<Bill/>}/>
        </Route>

      </Routes>
    </>
  );
}

export default App;
