import Avatar from '@material-ui/core/Avatar'
import React from 'react'
import { User } from '../../../types/types'
import PostModal from '../../Common/PostModal'
import './Post.css'

interface PropsType {
  owner: User
  postId: number
  deletePost: (postId: number) => void
  follow: (followed_user_id: number) => void
}

const PostHeader: React.FC<PropsType> = ({owner, postId, deletePost, follow}) => {

  const onFollow = () => {
    follow(owner.id)
  }

  return (
    <div className="post__header">
      <Avatar
        className="post__avatar"
        alt="alt"
        src={(owner.id === 11 || owner.id === 12) ? owner.profile.avatar : "alt"}
      />
      <h3>{owner.username}</h3>
      {owner.is_followed ? <button onClick={onFollow}>unfollow</button> : <button onClick={onFollow}>follow</button>}
      <PostModal postId={postId} deletePost={deletePost} />
    </div>
  )
}

export default PostHeader