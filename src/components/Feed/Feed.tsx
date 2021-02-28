import React, { useEffect } from 'react'
import {CircularProgress} from '@material-ui/core'
import Post from './Post/Post'
import {PostType} from './../../types/types'

interface PropsType {
  isInitializing: boolean
  posts: PostType[]
  addComment: (body: string, postId: number) => void
  deleteComment: (commenId: number) => void
  deletePost: (postId: number) => void
  initRequestAndSetPosts: () => void
  like: (postId: number) => void
}

const Feed: React.FC<PropsType> = ({
  isInitializing, posts, addComment, deleteComment, deletePost, initRequestAndSetPosts, like
}) => {

  useEffect(() => initRequestAndSetPosts(), [initRequestAndSetPosts])

  const postsJsx = (
    <div>
      {posts.map((post) => (
        <Post
          caption={post.caption}
          comments={post.comments}
          id={post.id}
          images={post.images}
          key={post.id}
          owner={post.owner}
          published_at={post.published_at}
          total_likes={post.total_likes}
          addComment={addComment}
          deleteComment={deleteComment}
          deletePost={deletePost}
          like={like}
        />
      ))}
    </div>
  )

  return isInitializing ? <CircularProgress /> : postsJsx
}

export default Feed