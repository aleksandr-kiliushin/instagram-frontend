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
  image: PostType['image']
  owner: PostType['owner']
  published_at: PostType['published_at']
  addComment: (body: string, postId: number) => void
  deleteComment: (commentId: number) => void
  deletePost: (postId: number) => void
}

const Post: React.FC<PropsType> = ({
  caption, comments, id, image, owner, published_at, addComment, deleteComment, deletePost
}) => {
  return (
    <div className="post">
      <PostHeader owner={owner} postId={id} deletePost={deletePost} />
      <img
        className="post__image"
        src={image}
        alt={image}
      />
      <PostFooter />
      <Comments caption={caption} comments={comments} owner={owner} deleteComment={deleteComment} />
      <AddComment postId={id} addComment={addComment} />
    </div>
  )
}

export default Post