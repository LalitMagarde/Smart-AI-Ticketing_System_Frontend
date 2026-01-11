import { loginUser, logoutUser } from "../reducer/userSlice";
import axios from '../../../api/config'



export const asyncLoginUser = (info) =>async (dispatch,getstate)=>{
      try{
           
           console.log(info);
            const {data} = await axios.post('/api/auth/login',info);
             
            
            localStorage.setItem('user',JSON.stringify(data.user));
            dispatch(asyncCurrentUser());
            
            console.log(data);
            return data.user ? "Valid-User":"Invalid_User"; 
             

      }
      catch(error){
         console.log(error);
      }
}

export const asyncCurrentUser = () =>async (dispatch,getstate)=>{
    try{
        const user = JSON.parse(localStorage.getItem('user'));
        console.log(user);
        dispatch(loginUser(user));
    }
    catch(error){
        console.log(error);
    }
}


export const asyncLogoutUser = ()=> async (dispatch,getstate) =>{
    try{
        
        await dispatch(logoutUser());
        localStorage.removeItem('user');

    }
    catch(error){
        console.log(error);
    }
}

export const asyncUpdateUser = (info) => async (dispatch,getstate) =>{
    try{
        console.log(info);
        const {data} = await axios.post('/api/auth/update-user',info);

        console.log(data.user);

        return data.user;
    }
    catch(error){
      console.log(error);
    }
} 

export const asyncGetAllUsers = () => async (dispatch,getstate) =>{
    try{
       const {data} = axios.get('/api/auth/users');

       console.lop(data.user);
       return data.user;
    }
    catch(error){
        console.log(error);
    }
}