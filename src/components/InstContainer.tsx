import React from 'react'
// import Feed from './Feed/Feed'
import Header from './Header/Header'
import {connect} from 'react-redux'
import { RootState } from '../redux/store'
import { CurUser } from '../types/types'
// import { addComment, addPost, deleteComment, deletePost, initRequestAndSetPosts, requestPosts } from '../redux/feed-reducer'
// import { requestAndSetToken} from '../redux/auth-reducer'


const InstContainer: React.FC<Props> = ({curUser}) => {

  return (
    <div>
      <Header curUser={curUser}/>
      {/* <Feed
        isInitializing={isInitializing}
        posts={posts}
        authUser={authUser}

        addComment={addComment}
        deleteComment={deleteComment}
        deletePost={deletePost}
        initRequestAndSetPosts={initRequestAndSetPosts}
        like={like}
        follow={follow}
      /> */}
    </div>
  )
}

const mapStateToProps = (state: RootState): MapStatePropsType => ({
  curUser: state.auth.curUser,
})


const mapDispatchToProps: MapDispatchPropsType = {
  
}


export default connect
  <MapStatePropsType, MapDispatchPropsType, {}, RootState>
  (mapStateToProps, mapDispatchToProps)(InstContainer)





// types

type MapStatePropsType = {
  curUser: CurUser
}
type MapDispatchPropsType = {}
type Props = MapStatePropsType & MapDispatchPropsType