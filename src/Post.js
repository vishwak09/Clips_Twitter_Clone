import React from 'react'
import './Post.css'
import Avatar from '@mui/material/Avatar';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';


function Post({
    displayName, 
    username, 
    verified, 
    text, 
    image, 
    avatar 
}) {
    return(
      <div className="post">
        <div className="post__avatar">
        <Avatar src='/vish.jpeg'/>
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                  Vishwak Reddy<span>
                   <VerifiedUserIcon className="post__badge" />
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>Explore and Enjoy</p>
            </div>
          </div>
          <img src="/fun.jpeg" alt="" />
          <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
          </div>

          
        </div>
      </div>
    )};
  

export default Post;