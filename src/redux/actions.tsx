import { feedApi } from "../api/feed-api"
import { userApi } from "../api/user-api"
import { AlertType, CommentType, FeedState, Notice, PostType, UserType } from "../types/types"
import { initCurUserState } from "./initStates"
import { BaseThunkType, InferActions } from "./store"


export const actions = {
  // app
  setAlert: (alert: AlertType) => ({type: 'app/SET_ALERT', alert} as const),
  // feed
  addComment: (comment: CommentType, postId: PostType['id']) => ({type: 'feed/ADD_COMMENT', comment, postId} as const),
  addPost: (post: PostType) => ({type: 'feed/ADD_POST', post} as const),
  delComment: (commentId: CommentType['id'], postId: PostType['id']) => ({type: 'feed/DEL_COMMENT', commentId, postId} as const),
  delPost: (id: PostType['id']) => ({type: 'feed/DEL_POST', id} as const),
  setLike: (id: PostType['id']) => ({type: 'feed/SET_LIKE', id} as const),
  resetFeedState: () => ({type: 'feed/RESET_FEED_STATE'} as const),
  setArePostsOver: (are: FeedState['arePostsOver']) => ({type: 'feed/SET_ARE_POSTS_OVER', are} as const),
  setIsNoPostsRecieved: (is: FeedState['isNoPostsRecieved']) => ({type: 'feed/SET_IS_NO_POSTS_RECIEVED', is} as const),
  setIsWaitingForNewPosts: (is: FeedState['isWaitingForNewPosts']) => ({type: 'feed/SET_IS_WAITING_FOR_NEW_POSTS', is} as const),
  setPosts: (posts: PostType[]) => ({type: 'feed/SET_POSTS', posts} as const),
  // user
  resetUserState: () => ({type: 'user/RESET_USER_STATE'} as const),
  setAvatar: (url: UserType['avatar']) => ({type: 'user/SET_AVATAR', url} as const),
  setFollowingInProgress: (id: UserType['id']) => ({type: 'user/SET_FOLLOWING_IN_PROGRESS', id} as const),
  setIsFollowed: (id: UserType['id']) => ({type: 'user/SET_IS_FOLLOWED', id} as const),
  setIsInitialized: (is: boolean) => ({type: 'user/SET_IS_INITIALIZED', is} as const),
  setNotice: (notice: Notice) => ({type: 'user/SET_NOTICE', notice} as const),
  setRedirectTo: (to: string | null) => ({type: 'user/SET_REDIRECT_TO', to} as const),
  setUserData: (data: UserType) => ({
    type: 'user/SET_USER_DATA',
    avatar: data.avatar,
    id: data.id,
    is_followed: data.is_followed,
    username: data.username,
  } as const),
  setUsers: (users: UserType[]) => ({type: 'user/SET_USERS', users} as const),
}


// Feed thunks.
export const addComment = (body: CommentType['body'], postId: PostType['id']): ThunkType => async (dispatch) => {
  const res = await feedApi.addComment(body, postId)
  if (res.status === 200) {
    dispatch(actions.addComment(res.data.comment, postId))
  }
}
export const addPost = (caption: PostType['caption'], images: FileList): ThunkType => async (dispatch) => {
  const res = await feedApi.addPost(caption, images)
  if (res.status === 200) {
    dispatch(actions.addPost(res.data.post))
  }
}
export const deleteComment = (commentId: CommentType['id'], postId: PostType['id']): ThunkType => async (dispatch) => {
  const res = await feedApi.deleteComment(commentId)
  if (res.status === 200) {
    dispatch(actions.delComment(commentId, postId))
  }
}
export const deletePost = (id: PostType['id']): ThunkType => async (dispatch) => {
  const res = await feedApi.deletePost(id)
  if (res.status === 200) {
    dispatch(actions.delPost(id))
  }
}
export const like = (id: PostType['id']): ThunkType => async (dispatch) => {
  dispatch(actions.setLike(id))    
  await userApi.like(id)
}
export const reqAndSetPosts = (): ThunkType => async (dispatch, getState) => {
  dispatch(actions.setIsWaitingForNewPosts(true))
  const posts = getState().feed.posts
  const startId = posts.length === 0 ? 0 : posts[posts.length - 1].id
  const res = await feedApi.reqPosts(startId)
  if (res.status === 200) {
    dispatch(actions.setIsNoPostsRecieved(false))
    dispatch(actions.setArePostsOver(res.data.are_posts_over))
    dispatch(actions.setPosts(res.data.posts))
  } else {
    dispatch(actions.setIsNoPostsRecieved(true))
  }
  dispatch(actions.setIsWaitingForNewPosts(false))
}


// User thunks.
export const deleteAvatar = (): ThunkType => async (dispatch) => {
  const res = await userApi.deleteAvatar()
  if (res.status === 200) {
    dispatch(actions.setAvatar(res.data.avatar))
    dispatch(actions.setAlert({body: 'Avatar deleted', severity: 'success'}))
  }
}
export const follow = (id: UserType['id']): ThunkType => async (dispatch) => {
  dispatch(actions.setFollowingInProgress(id))
  const res = await userApi.follow(id)
  if (res.status === 200) {
    dispatch(actions.setIsFollowed(id))
  }
  dispatch(actions.setFollowingInProgress(id))
}
export const initAuth = (): ThunkType => async (dispatch) => {
  const res = await userApi.initAuth()
  if (res.status === 200) {
    dispatch(actions.setUserData(res.data))
  }
  dispatch(actions.setIsInitialized(true))
}
export const login = (username: UserType['username'], password: string): ThunkType => async (dispatch) => {
  const res = await userApi.login(username, password)
  if (res.status === 200) {
    dispatch(actions.resetFeedState())
    dispatch(actions.resetUserState())
		localStorage.setItem('token', res.data.token)
    dispatch(actions.setUserData(res.data))
    dispatch(actions.setRedirectTo('/'))
  } else {
    dispatch(actions.setNotice({body: res.data.msg, kind: 'err'}))
  }
}
export const logout = (): ThunkType => async (dispatch) => {
  dispatch(actions.resetFeedState())
  dispatch(actions.resetUserState())
  dispatch(actions.setUserData(initCurUserState))
}
export const register = (username: UserType['username'], password: string): ThunkType => async (dispatch) => {
  const res = await userApi.register(username, password)
  if (res.status === 200) {
    dispatch(actions.setRedirectTo('/login'))
    dispatch(actions.setNotice({body: res.data.msg, kind: 'suc'}))
  } else {
    dispatch(actions.setNotice({body: res.data.msg, kind: 'err'}))
  }
}
export const reqAndSetUsers = (): ThunkType => async (dispatch) => {
  const res = await userApi.reqUsers()
  if (res.status === 200) {
    dispatch(actions.setUsers(res.data))
  }
}
export const updateAvatar = (avatar: File): ThunkType => async (dispatch) => {
  const res = await userApi.updateAvatar(avatar)
  if (res.status === 200) {
    dispatch(actions.setAvatar(res.data.avatar))
    dispatch(actions.setAlert({body: 'Avatar updated', severity: 'success'}))
  }
}




// Types
export type Actions = InferActions<typeof actions>
export type ThunkType = BaseThunkType<Actions>