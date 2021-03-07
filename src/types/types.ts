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
}

// old

// export interface UserProfile {
//   avatar: string
//   bio: string
// }

// export interface User {
//   id: number
//   is_followed: boolean
//   profile: UserProfile
//   username: string
// }

// export interface Comment {
//   id: number
//   added_at: string
//   body: string
//   author: User
//   post: number
// }

// export interface PostType {
//   caption: string
//   comments: Comment[]
//   id: number
//   is_liked: boolean
//   images: string[]
//   owner: User
//   published_at: string
//   total_likes: number
// }

// export interface InstState {
//   isInitializing: boolean
//   posts: PostType[]
// }

