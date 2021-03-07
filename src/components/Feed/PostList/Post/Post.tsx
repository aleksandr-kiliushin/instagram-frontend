import React from 'react'
import { PostType, UserType } from '../../../../types/types'
import PostHeader from './PostHeader'
import PostCarousel from './PostCarousel'
// import PostFooter from './PostFooter'


const Post: React.FC<PropsType> = ({
  curUserId,
  deletePost,
  follow,
  images,
  owner,
  postId,
  unfollow,
}) => {
  return (
    <article className="post">
      <PostHeader
        curUserId={curUserId}
        deletePost={deletePost}
        follow={follow}
        owner={owner}
        postId={postId}
        unfollow={unfollow}
      />
      <PostCarousel images={images} />
      {/* <PostFooter
      
      /> */}
    </article>
  )
}

export default Post




// types

type PropsType = {
  curUserId: UserType['id']
  deletePost: (id: PostType['id']) => void
  follow: (id: UserType['id']) => void
  postId: PostType['id']
  images: PostType['images']
  owner: PostType['owner']
  unfollow: (id: UserType['id']) => void
}