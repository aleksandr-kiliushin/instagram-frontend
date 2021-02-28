import React from 'react'
import { PostType } from '../../../types/types'
import Comments from './Comments'
import AddComment from './AddComment'
import PostFooter from './PostFooter'
import PostHeader from './PostHeader'
import './Post.css'
import PostCarousel from './PostCarousel'


type PropsType = {
  caption: PostType['caption']
  comments: PostType['comments']
  id: PostType['id']
  images: PostType['images']
  owner: PostType['owner']
  published_at: PostType['published_at']
  total_likes: PostType['total_likes']
  addComment: (body: string, postId: number) => void
  deleteComment: (commentId: number) => void
  deletePost: (postId: number) => void
  like: (postId: number) => void  
}

const Post: React.FC<PropsType> = ({
  caption, comments, id, images, owner, published_at, total_likes, addComment, deleteComment, deletePost, like
}) => {
  return (
    <div className="post">
      <PostHeader owner={owner} postId={id} deletePost={deletePost} />
      <PostCarousel images={images} />
      <PostFooter total_likes={total_likes} like={like} postId={id} />
      <Comments caption={caption} comments={comments} owner={owner} deleteComment={deleteComment} />
      <AddComment postId={id} addComment={addComment} />
    </div>
  )
}

export default Post