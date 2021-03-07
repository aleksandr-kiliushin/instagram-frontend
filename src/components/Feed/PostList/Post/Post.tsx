import React from 'react'
import { PostType, UserType } from '../../../../types/types'
import PostHeader from './PostHeader'
import PostCarousel from './PostCarousel'
import PostFooter from './PostFooter'


const Post: React.FC<PropsType> = ({
  caption,
  comments,
  curUserId,
  deletePost,
  follow,
  images,
  isLiked,
  like,
  owner,
  postId,
  totalLikes,
}) => {
  return (
    <article className="post">
      <PostHeader
        curUserId={curUserId}
        deletePost={deletePost}
        follow={follow}
        owner={owner}
        postId={postId}
      />
      <PostCarousel images={images} isLiked={isLiked} like={like} postId={postId} />
      <PostFooter
        caption={caption}
        comments={comments}
        isLiked={isLiked}
        like={like}
        ownerId={owner.id}
        ownerUsername={owner.username}
        postId={postId}
        totalLikes={totalLikes}
      />
    </article>
  )
}

export default Post




// types
type PropsType = {
  caption: PostType['caption']
  comments: PostType['comments']
  curUserId: UserType['id']
  deletePost: (id: PostType['id']) => void
  follow: (id: UserType['id']) => void
  images: PostType['images']
  isLiked: PostType['is_liked']
  like: (id: PostType['id']) => void
  owner: PostType['owner']
  postId: PostType['id']
  totalLikes: PostType['total_likes']
}