import React, {useEffect,useState} from 'react'
import "./SideBar.css"
import SearchOutlinedIcon from '@material-ui/icons/Search';
import ChatIcon from '@material-ui/icons/Chat';
import {Avatar ,IconButton} from "@material-ui/core"
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SidebarChat from './SidebarChat.js';
import db from './Firebase';
function SideBar() {
    const [rooms, setRooms] = useState([]);
     useEffect(() => {
         db.collection('rooms').onSnapshot(snapshot => setRooms(
                   snapshot.docs.map(doc => ( {
                       id: doc.id,
                       data: doc.data(),
                   }))
               )
         );
     },[]);
    
        return (
            <div className="sidebar">
                <div className="sidebar__header">
                    <Avatar/>
                        <div className="header__right"></div>
                            <IconButton>  
                                <DonutLargeIcon/>
                            </IconButton> 
                            <IconButton>  
                                <ChatIcon/>                
                            </IconButton> 
                            <IconButton>     
                                <MoreVertIcon/>
                            </IconButton>   
                </div>
                <div className="sidebar__search">
                    <div className="sidebar__search_container">
                        <SearchOutlinedIcon/>
                    <input placeholder='search or start new chat'/>
                    </div>
                    
                </div>
                <div className="sidebar_chats">
                    <SidebarChat addNewChat/>
                    {rooms.map(room=>(
                        <SidebarChat key={room.id} id={room.id} name={room.data.name} />
                    ))}  
                </div>
            </div>
    )
}

export default SideBar
