import { CometChat } from "@cometchat-pro/chat";
import {useState} from 'react';

const Login = () =>{
const [uid,setUID] = useState("");
const [userdetail,setuserdetail] = useState({});

const login = (uid) =>{
let UID = uid;
var authKey = "cc111af04a9f47d98e33ecd2354ec11d8f8fcdf9";

  CometChat.login(UID,authKey)
  .then(
    (user)=>
    {
    console.log('Login Successful:', { user });
    setuserdetail(user)
    
    }
    )
    .catch((error)=>console.log(error))
}           
            
               
// console.log(userdetail);
const handleClick = (e) =>{
  e.preventDefault();
  console.log(uid);
  login(uid);
  }

const logout = () =>{
  CometChat.logout().then(
    ()=>{
    setuserdetail({})
    console.log('Logout sucessful')
    })
}
    
return(
    <div>
    <form onSubmit={login}>
    <label 
    htmlFor="UID">Username:</label>
    <input 
    type="text"
    value={uid}
    onChange={({ target }) => setUID(target.value)}    
    />
    <button type="submit" onClick={handleClick}>Login</button>
    <h1>{userdetail?.name}</h1>
    </form>
    {
      Object.keys(userdetail).length > 0 ? (<button onClick={logout}>Log Out</button>) : (<p>Please Log in</p>)
    }
    </div>
);
}

export default Login;