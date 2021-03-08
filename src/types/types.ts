// app
export interface AppState {
  alert: AlertType
}
export type AlertType = {
  body: string
  severity: 'error' | 'info' | 'success'| 'warning'
} | null


// feed
export interface FeedState {
  arePostsOver: boolean
  isNoPostsRecieved: boolean
  isWaitingForNewPosts: boolean
  posts: PostType[]
}
export interface PostType {
  caption: string
  comments: CommentType[]
  id: number
  images: string[]
  is_liked: boolean
  owner: UserType
  total_likes: number
}
export interface CommentType {
  author: UserType
  body: string
  id: number
}


// user
export interface UserState {
  curUser: UserType
  isInitialized: boolean
  notice: Notice
  redirectTo: string | null
  users: UserType[]
}
export interface UserType {
  avatar: string
  id: number
  is_followed: boolean
  username: string
}
export type Notice = {
  body: string
  kind: 'err' | 'suc'
} | null