import React from 'react'
import { Comment, User } from '../../../types/types'
import './Post.css'
import CommentModal from '../../Common/CommentModal'


interface PropsType {
  caption: string
  comments: Comment[]
  owner: User
  deleteComment: (commentId: number) => void
}


const Comments: React.FC<PropsType> = ({caption, comments, owner, deleteComment}) => {
  return (
    <div>
      <h4 className="post__caption"><strong>{owner.username}</strong> {caption}</h4>
      {
        comments.map((comment) => (
          <div key={comment.id} className="post__comment">
            <h4 className="post__caption">
              <strong>{comment.author.username}</strong> {comment.body}
            </h4>
            <div className="post__comment_options">
              <CommentModal commentId={comment.id} deleteComment={deleteComment}/>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Comments