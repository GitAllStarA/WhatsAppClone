import React , {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import SideBar from './SideBar';
import Chat from './Chat'
import Login from './Login';
import {useStateValue} from "./StateProvider"


function App() {
const [{user}, dispatch] = useStateValue();
 return (
    // BEM naming convention
    <div className="App">
      {! user ? (
        <Login/>
      ):(<div className="app__body"> 
              
            <Router>
              <SideBar/> 
              {/* <Route exact path="/" component={Chat}/> */}
              <Route exact path="/rooms/:roomId" component={Chat}/>
            </Router>

     </div>
)}
     
    </div>
  );
}

export default App;
