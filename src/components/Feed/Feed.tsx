import React from 'react'
import { connect } from 'react-redux'
import { deletePost, reqAndSetPosts } from '../../redux/feed-reducer'
import { follow, like } from '../../redux/user-reducer'
import { RootState } from '../../redux/store'
import { PostType, UserType } from '../../types/types'
import Header from '../Header/Header'
import PostList from './PostList/PostList'


const Feed: React.FC<Props> = ({curUserId, deletePost, follow, like, posts, reqAndSetPosts}) => {
  return (
    <div>
      <Header />
      <PostList
        curUserId={curUserId}
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
  follow: (id: UserType['id']) => void
  deletePost: (id: PostType['id']) => void
  like: (id: PostType['id']) => void
  reqAndSetPosts: () => void
}
type Props = MapStateProps & MapDispatchProps