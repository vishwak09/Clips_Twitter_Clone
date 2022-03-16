import React from 'react'
import "./TweetBox.css"
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { red } from '@mui/material/colors';



function TweetBox() {
  return (
    <div className="tweetBox">
        <form> 
            <div className="tweetBox__input">
            <Avatar sx={{ bgcolor: red[500] }}>V</Avatar>
            <input placeholder="What's Happening" type="text"/>
            </div>

            <div className='tweetBox__imageInput'>
                 <input placeholder='Enter Image URL'type="text"/>

            </div>
            <Button className="tweetBox__tweetButton"> Tweet</Button>

        </form>
      
    </div>
  )
}

export default TweetBox
