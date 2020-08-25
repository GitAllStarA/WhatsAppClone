import React, { useState,useEffect } from 'react'
import './Chat.css'
import {Avatar,IconButton} from "@material-ui/core"
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MicIcon from '@material-ui/icons/Mic';
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import {useParams} from "react-router-dom";
import db from './Firebase';
import Moment from 'react-moment';
import firebase from 'firebase'
import {useStateValue} from "./StateProvider"


function Chat() {
    
    const [Seed, setSeed] = useState("")
    const [InputMessage, setInputMessage] = useState("")
    const {roomId} = useParams();
    const [roomNAME, setroomNAME] = useState("")
    const [messages, setmessages] = useState([])
    const [{user}, dispatch] = useStateValue();


    //Setting room name
    useEffect(() => {
     if(roomId){
         db.collection('rooms').doc(roomId).onSnapshot(snapshot => (
             setroomNAME(snapshot.data().name)
         ))     
         db.collection('rooms').doc(roomId).
         collection("messages").orderBy
         ('timestamp','asc').onSnapshot(snapshot  => (
                setmessages(snapshot.docs.map(doc => doc.data()))
                ) )
        }
    }, [roomId])

    useEffect(() => {
      setSeed(Math.floor(Math.random() * 5000))
    }, [roomId])
    
    const sendMessage = (e) => {
                e.preventDefault();
                console.log("your message >>>>>", InputMessage);
                
    db.collection("rooms").doc(roomId).collection("messages").add({
        message:InputMessage,
        name: user.displayName,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
                
                setInputMessage("");

    };

    return (
        <div className="Chat">
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/male/${Seed}.svg`}/>
                <div className="Chat__Header__info">
                    <h3>{roomNAME}</h3>
                    <p>
                        last seen {" "}
                        <Moment format="l"> 
                            {new Date(
                                messages[messages.length - 1]?.
                                timestamp?.toDate()
                                ).toUTCString()}  
                        </Moment>
                    </p>
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
                      {messages.map(msg =>(
                          <p className={`Chat_message ${msg.name === user.displayName && 'Chat_receiver'} `}>
                            <span className="Chat_Name">{msg.name}</span>
                            {msg.message}
                      <span className="Chat_TimeStamp"><Moment format="L">{new Date(msg.timestamp?.toDate()).toUTCString()}</Moment></span>
                        </p>
                      ) )}                     
            </div>
            <div className="chat__footer">
                <InsertEmoticonIcon/>
                <form>
                    <input value = {InputMessage} onChange={ (e) => setInputMessage(e.target.value)} type="text" placeholder="Type a message"/>
                    <button onClick={sendMessage} type="submit">send a message</button>
                </form>
                <MicIcon/>
            </div>
        </div>
    )
}

export default Chat
