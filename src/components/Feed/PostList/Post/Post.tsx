import React from 'react'
import { PostType } from '../../../../types/types'
import PostHeader from './PostHeader'
import PostCarousel from './PostCarousel'
// import PostFooter from './PostFooter'


const Post: React.FC<PropsType> = ({
  // caption, comments,
  postId,
  images,
  owner,
  // total_likes, addComment, deleteComment, deletePost, like, is_liked, follow
}) => {
  return (
    <article className="post">
      <PostHeader owner={owner} postId={postId} />
      <PostCarousel images={images} />
      {/* <PostFooter total_likes={total_likes} like={like} postId={id} is_liked={is_liked} caption={caption}
        comments={comments} owner={owner} deleteComment={deleteComment} addComment={addComment} /> */}
    </article>
  )
}

export default Post



// types

type PropsType = {
  // caption: PostType['caption']
  // comments: PostType['comments']
  postId: PostType['id']
  // is_liked: PostType['is_liked']
  images: PostType['images']
  owner: PostType['owner']
  // total_likes: PostType['total_likes']
}