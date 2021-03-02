import React, { useEffect } from 'react'
import Feed from './Feed/Feed'
import Header from './Header/Header'
import {connect} from 'react-redux'
import { RootState } from '../redux/store'
import { PostType, User } from '../types/types'
import { addComment, addPost, deleteComment, deletePost, initRequestAndSetPosts, requestPosts } from '../redux/feed-reducer'
import { tempAuthName, register, updateUserData, like, follow } from '../redux/auth-reducer'


const InstContainer: React.FC<Props> = ({
  authUser, isInitializing, posts, addComment, addPost, deleteComment, deletePost, initRequestAndSetPosts, tempAuthName,
  register, updateUserData, like, follow, requestPosts
}) => {

  useEffect(() => {
    requestPosts()
  }, [requestPosts])

  return (
    <div>
      <Header addPost={addPost} authUser={authUser} tempAuthName={tempAuthName} register={register} 
      updateUserData={updateUserData} />
      <Feed
        isInitializing={isInitializing}
        posts={posts}
        authUser={authUser}

        addComment={addComment}
        deleteComment={deleteComment}
        deletePost={deletePost}
        initRequestAndSetPosts={initRequestAndSetPosts}
        like={like}
        follow={follow}
      />
    </div>
  )
}

const mapStateToProps = (state: RootState): MapStatePropsType => ({
  authUser: state.auth.authUser,
  isInitializing: state.feed.isInitializing,
  posts: state.feed.posts,
})


const mapDispatchToProps: MapDispatchPropsType = {
  addComment,
  addPost,
  deleteComment,
  deletePost,
  initRequestAndSetPosts,
  tempAuthName,
  register,
  updateUserData,
  like,
  follow,
  requestPosts,
}


export default connect
  <MapStatePropsType, MapDispatchPropsType, {}, RootState>
  (mapStateToProps, mapDispatchToProps)(InstContainer)





// types

type MapStatePropsType = {
  authUser: User
  isInitializing: boolean
  posts: PostType[]
}
type MapDispatchPropsType = {
  addComment: (body: string, postId: number) => void
  addPost: (caption: string, images: FileList) => void
  deleteComment: (commentId: number) => void
  deletePost: (postId: number) => void
  initRequestAndSetPosts: () => void
  tempAuthName: (authUsername: string, password: string) => void
  register: (username: string, password: string) => void
  updateUserData: (avatar: File, bio: string) => void
  like: (postId: number) => void
  follow: (followed_user_id: number) => void
  requestPosts: () => void
}
type Props = MapStatePropsType & MapDispatchPropsType