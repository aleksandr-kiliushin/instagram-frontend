import React/*, { useEffect }*/ from 'react'
import Feed from './Feed/Feed'
import Header from './Header/Header'
import {connect} from 'react-redux'
import { RootState } from '../redux/store'
import { PostType } from '../types/types'
import { addComment, initRequestAndSetPosts } from '../redux/inst-reducer'


type MapStatePropsType = {
  isInitializing: boolean
  posts: PostType[]
}
type MapDispatchPropsType = {
  addComment: (body: string, postId: number) => void
  initRequestAndSetPosts: () => void
}
type PropsType = MapStatePropsType & MapDispatchPropsType

const InstContainer: React.FC<PropsType> = ({isInitializing, posts, addComment, initRequestAndSetPosts}) => {
  return (
    <div>
      <Header />
      <Feed
        isInitializing={isInitializing}
        posts={posts}

        addComment={addComment}
        initRequestAndSetPosts={initRequestAndSetPosts}
      />
    </div>
  )
}

const mapStateToProps = (state: RootState): MapStatePropsType => ({
  isInitializing: state.inst.isInitializing,
  posts: state.inst.posts,
})


const mapDispatchToProps: MapDispatchPropsType = {
  // ...actions,
  addComment,
  initRequestAndSetPosts,
}


export default connect
  <MapStatePropsType, MapDispatchPropsType, {}, RootState>
  (mapStateToProps, mapDispatchToProps)(InstContainer)