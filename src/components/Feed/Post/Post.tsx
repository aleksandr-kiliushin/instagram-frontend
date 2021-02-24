import React from 'react'
import { PostType } from '../../../types/types'
import Comments from './Comments'
import AddComment from './AddComment'
import PostFooter from './PostFooter'
import PostHeader from './PostHeader'
import './Post.css'


type PropsType = {
  caption: PostType['caption']
  comments: PostType['comments']
  id: PostType['id']
  imageUrl: PostType['imageUrl']
  key: PostType['id']
  owner: PostType['owner']
  published_at: PostType['published_at']
  addComment: (body: string, postId: number) => void
  deleteComment: (commentId: number) => void
}

const Post: React.FC<PropsType> = ({
  caption, comments, id, imageUrl, owner, published_at, addComment, deleteComment
}) => {
  return (
    <div className="post">
      <PostHeader owner={owner} />
      <img
        className="post__image"
        src={imageUrl}
        alt={imageUrl}
      />
      <PostFooter />
      <Comments caption={caption} comments={comments} owner={owner} deleteComment={deleteComment} />
      <AddComment postId={id} addComment={addComment} />
    </div>
  )
}

export default Post