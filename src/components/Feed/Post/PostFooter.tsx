import React, { useState } from 'react'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import SendOutlinedIcon from '@material-ui/icons/SendOutlined'
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined'
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined'
import { PostType } from '../../../types/types'
import FavoriteIcon from '@material-ui/icons/Favorite'
// import {Favorite} from '@material-ui/icons'
// import BookmarkOutlinedIcon from '@material-ui/icons/BookmarkOutlined'
import './Post.css'

interface Props {
  total_likes: PostType['total_likes']
  postId: PostType['id']
  is_liked: PostType['is_liked']
  like: (postId: number) => void  
}

const PostFooter: React.FC<Props> = ({total_likes, like, postId, is_liked}) => {
  const [isLiked, setIsLiked] = useState(is_liked)

  const onLike = () => {
    if (false) {
      setIsLiked(prevIsLiked => !prevIsLiked)
    }
    like(postId)
  }

  return (
    <div className="post__footer">
      {isLiked ? <FavoriteIcon onClick={onLike} color="secondary" /> : <FavoriteBorderIcon onClick={onLike} />}
      <ModeCommentOutlinedIcon />
      <SendOutlinedIcon />
      <strong>likes</strong>{total_likes}
      <span className="post__bookmarkIcon">
        <BookmarkBorderOutlinedIcon />
      </span>
    </div>
  )
}

export default PostFooter