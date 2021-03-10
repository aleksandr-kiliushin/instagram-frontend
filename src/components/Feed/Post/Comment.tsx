import React, { useState } from 'react'
import { CommentType, PostType, UserType } from '../../../types/types'
import CommentModal from './CommentModal'


const Comment: React.FC<Props> = ({
  authorId, authorUsername, body, commentId, curUserId, deleteComment, ownerId, postId
}) => {

  const maxLength = 120


  const [isMoreShown, setIsMoreShown] = useState(body.length > maxLength)
  const [isSliced, setIsSliced] = useState(body.length > maxLength)


  const getSlicedBody = (body: string) => {
    for (let i = maxLength; i > 0; i--) {
      if (body[i] === ' ') {
        return body.slice(0, i)
      }
    }
  }


  const onMore = () => {
    setIsSliced(false)
    setIsMoreShown(false)
  }


  const [isModalVisible, setIsModalVisible] = useState(false)


  const onMouseCame = () => {
    if (curUserId === authorId || curUserId === ownerId || curUserId === 1) {
      setIsModalVisible(true)
    }
  }
  const onMouseGone = () => {
    setIsModalVisible(false)
  }


  return (
    <div
      className="post__footer__comments__item" 
      onMouseEnter={onMouseCame}
      onMouseLeave={onMouseGone}
    >
      

      <div className="post__footer__comments__comment">

        <span className="post__footer__comments__author">
          {authorUsername}
        </span>

        &nbsp;

        <span>
          {isSliced ? getSlicedBody(body) : body}
        </span>

        {isMoreShown &&
          <span className="post__footer__comments__more" onClick={onMore}>
            ...more
          </span>
        }

      </div>

      <div className="comment__modalBox">
        {/* {true && */}
        {isModalVisible &&
          <div className="pointer">
            <CommentModal commentId={commentId} deleteComment={deleteComment} postId={postId} />
          </div>
        }
      </div>

    </div>
  )
}

export default Comment




// types
interface Props {
  authorId: UserType['id'] | null
  authorUsername: UserType['username']
  body: string
  commentId: CommentType['id'] | null
  curUserId: UserType['id']
  deleteComment: (commentId: CommentType['id'], postId: PostType['id']) => void
  ownerId: UserType['id'] | null
  postId: PostType['id']
}