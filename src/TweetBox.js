import React, {useState} from 'react'
import "./TweetBox.css"
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import db from './firebase'


function TweetBox() {
    const[tweetMessage,setTweetMessage]= useState("");
    const[tweetImage,setTweetImage]= useState("");
    
    const sendTweet = e => {
        e.preventDefault();

        db.collection('posts').add({
            displayName:'Vishwak Reddy',
            username:'vishwak09',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar:"https://media0.giphy.com/media/XFp3mszb8wPNlQQCIa/giphy.gif?cid=ecf05e47onytc8ee9k3pj7bymuj4nyusk6r84fdh83gm2w6y&rid=giphy.gif&ct=g"

        });
        setTweetMessage("");
        setTweetImage("");

        
        
    }


  return (
    <div className="tweetBox">
        <form> 
            <div className="tweetBox__input">
            <Avatar src="https://media0.giphy.com/media/XFp3mszb8wPNlQQCIa/giphy.gif?cid=ecf05e47onytc8ee9k3pj7bymuj4nyusk6r84fdh83gm2w6y&rid=giphy.gif&ct=g" />
            <input 
              onChange={(e) =>setTweetMessage(e.target.value)}
              value={tweetMessage}
              placeholder={"What's Happening"} 
              type="text"/>
            </div>

            <div className='tweetBox__imageInput'>
                 <input 
                  onChange={(e) =>setTweetImage(e.target.value)}
                   value={tweetImage}
                   placeholder='Enter Image URL'
                   type="text"/>

            </div>
            <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton"> Tweet</Button>

        </form>
      
    </div>
  )
}

export default TweetBox
