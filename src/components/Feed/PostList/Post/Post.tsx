import React from 'react'
import { CommentType, PostType, UserType } from '../../../../types/types'
import PostHeader from './PostHeader'
import PostCarousel from './PostCarousel'
import PostFooter from './PostFooter'


const Post: React.FC<PropsType> = ({
  addComment,
  caption,
  comments,
  curUserId,
  deleteComment,
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
        addComment={addComment}
        caption={caption}
        comments={comments}
        deleteComment={deleteComment}
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
  addComment: (body: CommentType['body'], postId: PostType['id']) => void
  caption: PostType['caption']
  comments: CommentType[]
  curUserId: UserType['id']
  deleteComment: (id: CommentType['id']) => void
  deletePost: (id: PostType['id']) => void
  follow: (id: UserType['id']) => void
  images: PostType['images']
  isLiked: PostType['is_liked']
  like: (id: PostType['id']) => void
  owner: PostType['owner']
  postId: PostType['id']
  totalLikes: PostType['total_likes']
}