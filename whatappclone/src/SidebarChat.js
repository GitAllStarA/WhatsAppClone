import React, { useState, useEffect } from 'react'
import {Avatar ,IconButton} from "@material-ui/core"
import './SidebarChat.css'
import db from './Firebase';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";

function SidebarChat({id, name, addNewChat}) {
    const [Seed, setSeed] = useState('');
    const [messages, setmessages] = useState("")
    
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5031300))
    }, [])

    const createChat =()=>{
        const roomName = prompt('Please enter name for chat');
        if(roomName) {
            // do some db stuff
            db.collection("rooms").add({
                name: roomName,
            });
        }
    }
    useEffect(() => {
     if(id) {
         db.collection("rooms")
            .doc(id).collection("messages")
            .orderBy('timestamp','desc')
            .onSnapshot((snapshot) => 
                setmessages(snapshot.docs.map((doc) => doc.data())))
     }
    }, [id])

    return !addNewChat ? (
        <Link to={`/rooms/${id}`}>
        <div className="sidebarChat">
          <Avatar src={`https://avatars.dicebear.com/api/male/${Seed}.svg`}/>  
          <div className="sideBarChat__info">
                <h2>{name}</h2>
                <p>{messages[0]?.message}</p>
            </div>
        </div>
        </Link>
    ) 
    : 
    (
        <div onClick={createChat} 
            className="sidebarChat">
                <h2>Add New Chat</h2>
        </div>
    )   
}

export default SidebarChat
