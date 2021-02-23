import React from 'react'
import { Comment, User } from '../../../types/types'
import './Post.css'


interface PropsType {
  caption: string
  comments: Comment[]
  owner: User
}


const Comments: React.FC<PropsType> = ({caption, comments, owner}) => {
  return (
    <div>
      <h4 className="post__caption"><strong>{owner.username}</strong> {caption}</h4>
      {
        comments.map((comment) => (
          <h4
            className="post__caption"
            key={comment.id}
          >
            <strong>{comment.author.username}</strong> {comment.body}
          </h4>
        ))
      }
    </div>
  )
}

export default Comments