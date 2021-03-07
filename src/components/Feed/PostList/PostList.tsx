import React, { useEffect } from 'react'
import { PostType, UserType } from '../../../types/types'
import Post from './Post/Post'


const PostList: React.FC<Props> = ({curUserId, follow, deletePost, like, posts, reqAndSetPosts}) => {

  useEffect(() => {
    if (posts.length === 0) {
      reqAndSetPosts()
    }
  }, [posts, reqAndSetPosts])

  return (
    <div className="content">
      {posts.map(post => (
        <Post
          caption={post.caption}
          comments={post.comments}
          curUserId={curUserId}
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
  curUserId: UserType['id']
  deletePost: (id: PostType['id']) => void
  follow: (id: UserType['id']) => void
  like: (id: PostType['id']) => void
  posts: PostType[]
  reqAndSetPosts: () => void
}


export default PostList