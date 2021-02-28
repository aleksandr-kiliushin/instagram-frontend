import React, { useEffect } from 'react'
import {CircularProgress} from '@material-ui/core'
import Post from './Post/Post'
import {PostType, User} from './../../types/types'

interface PropsType {
  isInitializing: boolean
  posts: PostType[]
  authUser: User
  addComment: (body: string, postId: number) => void
  deleteComment: (commenId: number) => void
  deletePost: (postId: number) => void
  initRequestAndSetPosts: () => void
  like: (postId: number) => void
  follow: (followed_user_id: number) => void
}

const Feed: React.FC<PropsType> = ({
  isInitializing, posts, addComment, deleteComment, deletePost, initRequestAndSetPosts, like, authUser, follow
}) => {

  useEffect(() => {
    if (authUser.id !== 0) {
      initRequestAndSetPosts()
    }
  }, [initRequestAndSetPosts, authUser.id])

  const postsJsx = (
    <div className="feed">
      {posts.map((post) => (
        <Post
          caption={post.caption}
          comments={post.comments}
          id={post.id}
          is_liked={post.is_liked}
          images={post.images}
          key={post.id}
          owner={post.owner}
          published_at={post.published_at}
          total_likes={post.total_likes}
          addComment={addComment}
          deleteComment={deleteComment}
          deletePost={deletePost}
          like={like}
          follow={follow}
        />
      ))}
    </div>
  )

  return isInitializing ? <CircularProgress /> : postsJsx
}

export default Feed