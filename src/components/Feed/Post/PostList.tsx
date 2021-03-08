import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import CircularProgress from '@material-ui/core/CircularProgress'
import { CommentType, FeedState, PostType, UserType } from '../../../types/types'
import Post from './Post'


const PostList: React.FC<Props> = ({
  addComment,
  arePostsOver,
  curUserId,
  deleteComment,
  follow,
  deletePost,
  isNoPostsRecieved,
  isWaitingForNewPosts,
  like,
  posts,
  reqAndSetPosts
}) => {



  const [isFirstRender, setIsFirstRender] = useState(true)
  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false)
      reqAndSetPosts()
    }
  }, [isFirstRender, reqAndSetPosts, setIsFirstRender])



  useEffect(() => {
    const loadMore = () => {
      if (document.scrollingElement) {
        if (window.innerHeight + document.documentElement.scrollTop === document.scrollingElement.scrollHeight) {
          if (!isWaitingForNewPosts && !arePostsOver) {
            reqAndSetPosts()
          }
        }
      }
    }
    window.addEventListener('scroll', loadMore)
    return () => window.removeEventListener('scroll', loadMore)
  }, [arePostsOver, isWaitingForNewPosts, reqAndSetPosts])



  const history = useHistory()
  if (posts.length === 0 && isNoPostsRecieved) {
    return (
      <div className="feed__followPeople">
        <p>Follow <span onClick={() => history.push('/users')}>people</span> to see their posts.</p>
      </div>
    )
  }



  return (
    <>
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
      <div className="content__preloader">
        {isWaitingForNewPosts && <CircularProgress color="inherit"/>}
        {arePostsOver && <p>That's all for now.</p>}
      </div>
    </>
  )
}


interface Props {
  addComment: (body: CommentType['body'], postId: PostType['id']) => void
  arePostsOver: FeedState['arePostsOver']
  curUserId: UserType['id']
  deleteComment: (id: CommentType['id']) => void
  deletePost: (id: PostType['id']) => void
  follow: (id: UserType['id']) => void
  isNoPostsRecieved: FeedState['isNoPostsRecieved']
  isWaitingForNewPosts: FeedState['isWaitingForNewPosts']
  like: (id: PostType['id']) => void
  posts: PostType[]
  reqAndSetPosts: () => void
}


export default PostList