import React, { useEffect } from 'react'
import { PostType, UserType } from '../../../types/types'
import Post from './Post/Post'


const PostList: React.FC<Props> = ({curUserId, follow, deletePost, posts, reqAndSetPosts, unfollow}) => {

  useEffect(() => {
    if (posts.length === 0) {
      reqAndSetPosts()
    }
  }, [posts, reqAndSetPosts])

  return (
    <div className="content">
      {posts.map(post => (
        <Post
          curUserId={curUserId}
          deletePost={deletePost}
          follow={follow}
          images={post.images}
          key={post.id}
          owner={post.owner}
          postId={post.id}
          unfollow={unfollow}
        />
      ))}
    </div>
  )
}


interface Props {
  curUserId: UserType['id']
  deletePost: (id: PostType['id']) => void
  follow: (id: UserType['id']) => void
  posts: PostType[]
  reqAndSetPosts: () => void
  unfollow: (id: UserType['id']) => void
}


export default PostList