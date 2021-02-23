import React from 'react'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import SendOutlinedIcon from '@material-ui/icons/SendOutlined'
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined'
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined'
// import {Favorite} from '@material-ui/icons'
// import BookmarkOutlinedIcon from '@material-ui/icons/BookmarkOutlined'
import './Post.css'


const PostFooter: React.FC = () => {
  return (
    <div className="post__footer">
      <FavoriteBorderIcon />
      <ModeCommentOutlinedIcon />
      <SendOutlinedIcon />
      <span className="post__bookmarkIcon">
        <BookmarkBorderOutlinedIcon />
      </span>
    </div>
  )
}

export default PostFooter