import React from 'react';

import './App.css';
import SideBar from './SideBar';
import Chat from './Chat'

function App() {
  return (
    // BEM naming convention
    <div className="App">
     
     <div className="app__body">
    <SideBar/>
    <Chat/>
  
     </div>

    </div>
  );
}

export default App;
