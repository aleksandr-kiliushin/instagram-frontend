import React, { useState } from 'react'
import { CommentType, PostType } from '../../../types/types'
import { loginRequired } from '../../../utils/utils'


const AddCommentForm: React.FC<PropsType> = ({addComment, postId}) => {
  const [body, setBody] = useState('')

  const onAddComment = () => loginRequired(() => {
    addComment(body, postId)
    setBody('')
  })

  return (
    <div className="post__footer__addComment">
      <textarea onChange={e => setBody(e.target.value)} placeholder="Add a comment…" value={body} />
      <button disabled={!body} onClick={onAddComment}>Post</button>
    </div>
  )
}

export default AddCommentForm



// types
interface PropsType {
  addComment: (body: CommentType['body'], postId: PostType['id']) => void
  postId: PostType['id']
}