export interface UserProfile {
  avatar: string
  bio: string
}

export interface User {
  id: number
  profile: UserProfile
  username: string
}

export interface Comment {
  id:       number
  added_at: string
  body:     string
  author:   User
  post:     number
}

export interface PostType {
  caption: string
  comments: Comment[]
  id: number
  is_liked: boolean
  images: string[]
  owner: User
  published_at: string
  total_likes: number
}

export interface InstState {
  isInitializing: boolean
  posts         : PostType[]
}




// auth

export interface AuthState {
  authUser: User
}