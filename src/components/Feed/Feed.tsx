import React from 'react'
import { connect } from 'react-redux'
import { addComment, deleteComment, deletePost, reqAndSetPosts } from '../../redux/feed-reducer'
import { follow, like } from '../../redux/user-reducer'
import { RootState } from '../../redux/store'
import { CommentType, PostType, UserType } from '../../types/types'
import Header from '../Header/Header'
import PostList from './PostList/PostList'


const Feed: React.FC<Props> = ({
  addComment, curUserId, deleteComment, deletePost, follow, like, posts, reqAndSetPosts
}) => {
  return (
    <div>
      <Header />
      <PostList
        addComment={addComment}
        curUserId={curUserId}
        deleteComment={deleteComment}
        deletePost={deletePost}
        follow={follow}
        like={like}
        posts={posts}
        reqAndSetPosts={reqAndSetPosts}
      />
    </div>
  )
}

const mapStateToProps = (state: RootState): MapStateProps => ({
  curUserId: state.user.curUser.id,
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
  curUserId: UserType['id']
  posts: PostType[]
}
type MapDispatchProps = {
  addComment: (body: CommentType['body'], postId: PostType['id']) => void
  deleteComment: (id: CommentType['id']) => void
  follow: (id: UserType['id']) => void
  deletePost: (id: PostType['id']) => void
  like: (id: PostType['id']) => void
  reqAndSetPosts: () => void
}
type Props = MapStateProps & MapDispatchProps