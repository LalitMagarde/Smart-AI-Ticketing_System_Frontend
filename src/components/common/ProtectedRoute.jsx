import React from 'react'
import {useSelector} from 'react-redux';
import LoginPage from '../auth/LoginPage';

const ProtectedRoute = (props) => {
   
  const {user}  = useSelector((store)=>store.userReducer);
  console.log(user);

  console.log(user);

  return (
    <>
     { user ? props.children : <LoginPage/>}
    </>
   
  )
}

export default ProtectedRoute