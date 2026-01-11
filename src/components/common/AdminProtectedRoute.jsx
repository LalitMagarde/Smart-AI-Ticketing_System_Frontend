import React from 'react'
import { useSelector } from 'react-redux'
import LoginPage from '../auth/LoginPage';

const AdminProtectedRoute = (props) => {
   
    const {user} =  useSelector((store)=>store.userReducer);


  return (
    <>
    { user && user.role=='admin' ?  props.children : <LoginPage/>   }
    </>
  )
}

export default AdminProtectedRoute