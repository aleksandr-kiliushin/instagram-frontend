import React, { useEffect } from 'react'
import { PostType } from '../../../types/types'
import Post from './Post/Post'


const PostList: React.FC<Props> = ({posts, reqAndSetPosts}) => {

  useEffect(() => {
    if (posts.length === 0) {
      reqAndSetPosts()
    }
  }, [posts, reqAndSetPosts])

  return (
    <div className="feed">
      {posts.map(post => (
        <Post
          images={post.images}
          key={post.id}
          postId={post.id}
          owner={post.owner}
        />
      ))}
    </div>
  )
}


interface Props {
  posts: PostType[]
  reqAndSetPosts: () => void
}


export default PostList