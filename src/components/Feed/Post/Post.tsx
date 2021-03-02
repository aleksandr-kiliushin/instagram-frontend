import React from 'react'
import { PostType } from '../../../types/types'
import PostHeader from './PostHeader'
// import './Post.scss'
import PostCarousel from './PostCarousel'
import PostFooter from './PostFooter'


type PropsType = {
  caption: PostType['caption']
  comments: PostType['comments']
  id: PostType['id']
  is_liked: PostType['is_liked']
  images: PostType['images']
  owner: PostType['owner']
  published_at: PostType['published_at']
  total_likes: PostType['total_likes']
  addComment: (body: string, postId: number) => void
  deleteComment: (commentId: number) => void
  deletePost: (postId: number) => void
  like: (postId: number) => void
  follow: (followed_user_id: number) => void
}

const Post: React.FC<PropsType> = ({
  caption, comments, id, images, owner, published_at, total_likes, addComment, deleteComment, deletePost, like, is_liked,
  follow
}) => {
  return (
    <article className="post postNarrow640 postNarrow735">
      <PostHeader owner={owner} postId={id} deletePost={deletePost} follow={follow} />
      <PostCarousel images={images} />
      <PostFooter total_likes={total_likes} like={like} postId={id} is_liked={is_liked} caption={caption}
        comments={comments} owner={owner} deleteComment={deleteComment} addComment={addComment} />
    </article>
  )
}

export default Post