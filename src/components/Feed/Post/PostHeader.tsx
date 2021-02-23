import { Avatar } from '@material-ui/core'
import React from 'react'
import { User } from '../../../types/types'
import './Post.css'

interface PropsType {
  owner: User
}

const PostHeader: React.FC<PropsType> = ({owner}) => {
  return (
    <div className="post__header">
      <Avatar
        className="post__avatar"
        alt={owner.username}
        src="/static/images/avatar/1.jpg"
      />
      <h3>{owner.username}</h3>
    </div>
  )
}

export default PostHeader