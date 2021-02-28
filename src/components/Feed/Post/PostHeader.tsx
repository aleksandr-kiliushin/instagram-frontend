import Avatar from '@material-ui/core/Avatar'
import React from 'react'
import { User } from '../../../types/types'
import PostModal from '../../Common/PostModal'
import './Post.css'

interface PropsType {
  owner: User
  postId: number
  deletePost: (postId: number) => void
}

const PostHeader: React.FC<PropsType> = ({owner, postId, deletePost}) => {
  return (
    <div className="post__header">
      <Avatar
        className="post__avatar"
        alt="alt"
        src={(owner.id === 11 || owner.id === 12) ? owner.profile.avatar : "alt"}
      />
      <h3>{owner.username}</h3>
      <PostModal postId={postId} deletePost={deletePost} />
    </div>
  )
}

export default PostHeader