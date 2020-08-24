import React, { useState,useEffect } from 'react'
import './Chat.css'
import {Avatar,IconButton} from "@material-ui/core"
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MicIcon from '@material-ui/icons/Mic';
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
function Chat() {
    
    const [Seed, setSeed] = useState("")
    const [InputMessage, setInputMessage] = useState("")
    
    useEffect(() => {
      setSeed(Math.floor(Math.random() * 5000))
    }, [])
    
    const sendMessage = (e) => {
                e.preventDefault();
                console.log("your message >>>>>", InputMessage);
                setInputMessage("");
    };

    return (
        <div className="Chat">
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/male/${Seed}.svg`}/>
                <div className="Chat__Header__info">
                    <h3>Room name</h3>
                    <p>Last seen</p>
                </div>
                <div className="chat_header_right">
                            <IconButton>  
                                <SearchIcon/>
                            </IconButton> 
                            <IconButton>  
                                <AttachFileIcon/>                
                            </IconButton> 
                            <IconButton>     
                                <MoreVertIcon/>
                            </IconButton> 

                </div>
            </div>

            <div className="chat__body">
                      
                        <p className={`Chat_message ${true && 'Chat_receiver'} `}>
                            <span className="Chat_Name">Mark</span>
                            Hey guys
                            <span className="Chat_TimeStamp">3:52 PM</span>
                        </p>
                      
            </div>

            <div className="chat__footer">
                <InsertEmoticonIcon/>
                <form>
                    <input value = {InputMessage} onChange={ (e) => setInputMessage(e.target.value)} type="text" placeholder="Type a message"/>
                    <button onClick={sendMessage} type="submit">send a message</button>
                </form>
                <MicIcon></MicIcon>
            </div>
        </div>
    )
}

export default Chat
