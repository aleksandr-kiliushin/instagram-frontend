import { Avatar } from '@material-ui/core'
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
        alt={owner.username}
        src="/static/images/avatar/1.jpg"
      />
      <h3>{owner.username}</h3>
      <PostModal postId={postId} deletePost={deletePost} />
    </div>
  )
}

export default PostHeader