export interface User {
  id: number
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
  images: string[]
  owner: User
  published_at: string
}

export interface InstState {
  isInitializing: boolean
  posts         : PostType[]
}




// auth

export interface AuthState {
  authUser: User
}