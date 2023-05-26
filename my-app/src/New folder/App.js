import React from 'react';

import { BrowserRouter,Route,Link,Routes } from 'react-router-dom';
import './App.css';

import Login from "./Login";
import Portfolio from "./Portfolio";
import ms from './image/nature.jpg';
import Booknow from './Booknow';
function App() {
  return (
    <div className="App">
      <div className="navbar">
      <BrowserRouter>
      
      <Link to='/Login' className='login'>Login</Link>
      <Link to='/Portfolio' className='portfolio'>Portfolio</Link>
      <Link to='/Booknow' className='booknow'>Booknow</Link>
      <Routes>
      
      <Route exact path='/Login/' element={<Login/>}></Route>
      <Route exact path='/Portfolio/' element={<Portfolio/>}></Route>
      <Route exact path='/Booknow/' element={<Booknow/>}></Route>
      
      </Routes>
      </BrowserRouter>
      </div>
   <div className='container'><img src={ms} alt='no image'/>
   <div className='text-block'>
   <h1>Holidays in <br></br>
   Self-catering<br></br>
   Accommodation Park</h1></div></div>
   <div className='bottom'><p>34+</p>
   <p>Great Rooms</p>
   <p>25+</p> 
   <p>Years of Working</p>
   <p>1300+</p>
   <p>Guests Have Arrived</p>
    </div>

    </div>
  );
}

export default App;
