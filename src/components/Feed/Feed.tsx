import React from 'react'
import { connect } from 'react-redux'
import { reqAndSetPosts } from '../../redux/feed-reducer'
import { RootState } from '../../redux/store'
import { PostType } from '../../types/types'
import Header from './Header/Header'
import PostList from './PostList/PostList'


const Feed: React.FC<Props> = ({posts, reqAndSetPosts}) => {
  return (
    <div>
      <Header />
      <PostList posts={posts} reqAndSetPosts={reqAndSetPosts} />
    </div>
  )
}

const mapStateToProps = (state: RootState): MapStateProps => ({
  posts: state.feed.posts,
})

// const {} = {...actions}
const mapDispatchToProps: MapDispatchProps = {
  reqAndSetPosts,
}


export default connect
  <MapStateProps, MapDispatchProps, {}, RootState>
  (mapStateToProps, mapDispatchToProps)(Feed)




// types

type MapStateProps = {
  posts: PostType[]
}
type MapDispatchProps = {
  reqAndSetPosts: () => void
}
type Props = MapStateProps & MapDispatchProps