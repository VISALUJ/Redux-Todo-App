import './Login.css'
import App from './App';
import React from "react";
import { BrowserRouter,Route,Link,Routes }  from 'react-router-dom';
function Login() {
    return(
        <div className="main">
            
            <div className="loginbox">
    
        <h1>Login</h1>
        <form>
        
            <p>Username</p>
            <input type="text"name=""placeholder="Enter Username"></input>
            <p>Password</p>
            <input type="password"name=""placeholder="Enter Password"></input><br></br>
            <BrowserRouter>
    <Routes>
      <Link to='/App' className='App'>
            <input type="button"name=""value="Login"></input><br></br>
            </Link>  <Route exact path='/App/' element={<App/>}></Route>
            </Routes>
            </BrowserRouter>
                
            <a href="registration.html">Don't have an account</a><br></br>
            <a href="">Forget Password</a>
            </form>
    </div>
        </div>

    );
}

export default Login;
