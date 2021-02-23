import React, { useEffect } from 'react'
import {LinearProgress} from '@material-ui/core'
import Post from './Post/Post'
import {PostType} from './../../types/types'

interface PropsType {
  isInitializing: boolean
  posts: PostType[]
  addComment: (body: string, postId: number) => void
  initRequestAndSetPosts: () => void
}

const Feed: React.FC<PropsType> = ({isInitializing, posts, addComment, initRequestAndSetPosts}) => {

  useEffect(() => initRequestAndSetPosts(), [initRequestAndSetPosts])

  const postsJsx = (
    <div>
      {posts.map((post) => (
        <Post
          caption={post.caption}
          comments={post.comments}
          id={post.id}
          imageUrl={post.imageUrl}
          key={post.id}
          owner={post.owner}
          published_at={post.published_at}
          addComment={addComment}
        />
      ))}
    </div>
  )

  return isInitializing ? <LinearProgress /> : postsJsx
}

export default Feed