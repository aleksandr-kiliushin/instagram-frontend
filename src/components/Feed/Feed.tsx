import React from 'react'
import { connect } from 'react-redux'
import { addComment, deleteComment, deletePost, follow, like, reqAndSetPosts } from '../../redux/actions'
import { RootState } from '../../redux/store'
import { CommentType, FeedState, PostType, UserType } from '../../types/types'
import Header from '../Header/Header'
import PostList from './Post/PostList'


const Feed: React.FC<Props> = ({
  addComment,
  arePostsOver,
  curUserId,
  deleteComment,
  deletePost,
  follow,
  isNoPostsRecieved,
  isWaitingForNewPosts,
  like,
  posts,
  reqAndSetPosts
}) => {
  return (
    <div>
      <Header />
      <div className="content">
        <PostList
          addComment={addComment}
          arePostsOver={arePostsOver}
          curUserId={curUserId}
          deleteComment={deleteComment}
          deletePost={deletePost}
          follow={follow}
          isNoPostsRecieved={isNoPostsRecieved}
          isWaitingForNewPosts={isWaitingForNewPosts}
          like={like}
          posts={posts}
          reqAndSetPosts={reqAndSetPosts}
        />
      </div>
    </div>
  )
}

const mapStateToProps = (state: RootState): MapStateProps => ({
  arePostsOver: state.feed.arePostsOver,
  curUserId: state.user.curUser.id,
  isNoPostsRecieved: state.feed.isNoPostsRecieved,
  isWaitingForNewPosts: state.feed.isWaitingForNewPosts,
  posts: state.feed.posts,
})

// const {} = {...actions}
const mapDispatchToProps: MapDispatchProps = {
  addComment,
  deleteComment,
  follow,
  deletePost,
  like,
  reqAndSetPosts,
}


export default connect
  <MapStateProps, MapDispatchProps, {}, RootState>
  (mapStateToProps, mapDispatchToProps)(Feed)




// types
type MapStateProps = {
  arePostsOver: FeedState['arePostsOver']
  curUserId: UserType['id']
  isNoPostsRecieved: FeedState['isNoPostsRecieved']
  isWaitingForNewPosts: FeedState['isWaitingForNewPosts']
  posts: PostType[]
}
type MapDispatchProps = {
  addComment: (body: CommentType['body'], postId: PostType['id']) => void
  deleteComment: (commentId: CommentType['id'], postId: PostType['id']) => void
  follow: (id: UserType['id']) => void
  deletePost: (id: PostType['id']) => void
  like: (id: PostType['id']) => void
  reqAndSetPosts: () => void
}
type Props = MapStateProps & MapDispatchProps