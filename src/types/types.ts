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
  imageUrl: string
  owner: User
  published_at: string
}

export interface InstState {
  authId        : number
  isInitializing: boolean
  posts         : PostType[]
}