import { AppState, FeedState, UserState, UserType } from "../types/types"


export const initAppState: AppState = {
  alert: null,
}


export const initFeedState: FeedState = {
  arePostsOver: false,
  isNoPostsRecieved: false,
  isWaitingForNewPosts: false,
  posts: [],
}


export const initCurUserState: UserType = {
  avatar: 'https://alexander-kilyushin-instagram.herokuapp.com/media/static/unauthorized_user_avatar.png',
  id: 0,
  is_followed: false,
  username: '',
}
export const initUserState: UserState = {
  curUser: initCurUserState,
  followingInProgress: [],
  isInitialized: false,
  notice: null,
  redirectTo: null,
  users: [],
}