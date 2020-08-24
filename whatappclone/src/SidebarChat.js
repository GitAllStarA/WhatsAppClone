import React, { useState, useEffect } from 'react'
import {Avatar ,IconButton} from "@material-ui/core"
import './SidebarChat.css'
function SidebarChat({id, name, addNewChat}) {
    const [Seed, setSeed] = useState('');
    
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5031300))
    }, [])

    const createChat =()=>{
        const roomName = prompt('Please enter name for chat');
        if(roomName) {
            // do some db stuff
        }
    }

    return !addNewChat ? (
        <div className="sidebarChat">
          <Avatar src={`https://avatars.dicebear.com/api/male/${Seed}.svg`}/>  
          <div className="sideBarChat__info">
                <h2>{name}</h2>
                <p>recent message</p>
            </div>
        </div>
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
