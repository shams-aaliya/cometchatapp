import './App.css';
import { Fragment } from 'react';
import CometChatUI from './components/CometChatUI';
import { Switch,Route,useHistory } from 'react-router-dom';
// import Login from './components/login';

import {useState} from 'react';
import { CometChat } from '@cometchat-pro/chat';

const App = () => {
  const [uid,setUID] = useState("");
  const [userdetail,setuserdetail] = useState({});
  const [namee,setnamee] = useState("Aaliya");
  let history = useHistory();


  
  const login = (uid) =>{
  let UID = uid;
  var authKey = "cc111af04a9f47d98e33ecd2354ec11d8f8fcdf9";
  
  CometChat.login(UID,authKey)
    .then(
     (user) =>
      {
      console.log('Login Successful:', { user })
      setuserdetail(user)
      setTimeout(()=>{console.log(userdetail)},5000)
      
      history.push('/cometchatui')
      // console.log(history)
      
      }
      )
      .catch((error)=>console.log(error))
  }           
  
  const handleClick = (e) =>{
    e.preventDefault();
    console.log(uid);
    login(uid);
    }
  
  const logout = () =>{
    CometChat.logout().then(
      ()=>{
      setuserdetail({})
      console.log('Logout sucessfull')
      })
  }
  return (
    <div className="App">
    <Switch>
    <Route exact 
           path='/' 
           render={()=>
            <Fragment>
            <h1>CometChat integrating using React UI Kit</h1>

            <div className="Login">
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
            </Fragment>
          }
    />   
    <Route path='/cometchatui' render={()=> <CometChatUI name={userdetail} />} />
    </Switch> 

    </div>
  );
}

export default App;