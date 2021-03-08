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
  avatar: 'http://localhost:8000/media/static/unauthorized_user_avatar.png',
  id: 0,
  is_followed: false,
  username: '',
}
export const initUserState: UserState = {
  curUser: initCurUserState,
  isInitialized: false,
  notice: null,
  redirectTo: null,
  users: [],
}