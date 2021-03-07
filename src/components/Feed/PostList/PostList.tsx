import React, { useEffect } from 'react'
import { CommentType, PostType, UserType } from '../../../types/types'
import Post from './Post/Post'


const PostList: React.FC<Props> = ({
  addComment, curUserId, deleteComment, follow, deletePost, like, posts, reqAndSetPosts
}) => {

  useEffect(() => {
    if (posts.length === 0) {
      reqAndSetPosts()
    }
  }, [posts, reqAndSetPosts])

  return (
    <div className="content">
      {posts.map(post => (
        <Post
          addComment={addComment}
          caption={post.caption}
          comments={post.comments}
          curUserId={curUserId}
          deleteComment={deleteComment}
          deletePost={deletePost}
          follow={follow}
          images={post.images}
          isLiked={post.is_liked}
          key={post.id}
          like={like}
          owner={post.owner}
          postId={post.id}
          totalLikes={post.total_likes}
        />
      ))}
    </div>
  )
}


interface Props {
  addComment: (body: CommentType['body'], postId: PostType['id']) => void
  curUserId: UserType['id']
  deleteComment: (id: CommentType['id']) => void
  deletePost: (id: PostType['id']) => void
  follow: (id: UserType['id']) => void
  like: (id: PostType['id']) => void
  posts: PostType[]
  reqAndSetPosts: () => void
}


export default PostList