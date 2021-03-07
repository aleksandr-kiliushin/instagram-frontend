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


export interface FeedState {
  isLoading: boolean
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