import { CommentType, FeedState, PostType } from '../types/types'
import { BaseThunkType, InferActions } from './store'
import { feedApi } from '../api/feed-api'


const initialState: FeedState = {
  isLoading: false,
  posts: [],
}

export default function feedReducer(state: FeedState = initialState, action: Actions): FeedState {

  switch (action.type) {

    // case 'SET_IS_LOADING': {
    //   return {...state, isLoading: action.isLoading}
    // }

    case 'SET_POSTS': {
      return {...state, posts: action.posts}
    }

    default:
      return state
  }
}

export const actions = {
  // setIsLoading: (isLoading: boolean) => ({type: 'SET_IS_LOADING', isLoading} as const),
  setPosts: (posts: PostType[]) => ({type: 'SET_POSTS', posts} as const),
}


export const addPost = (caption: PostType['caption'], images: FileList): ThunkType => async () => {
  const response = await feedApi.addPost(caption, images)
  if (response.status === 202) {
    alert('Error during publishing post.')
  }
}
export const deleteComment = (id: CommentType['id']): ThunkType => async () => {
  const response = await feedApi.deleteComment(id)
  if (response.status === 202) {
    alert('Error during deleting comment.')
  }
}
export const deletePost = (id: PostType['id']): ThunkType => async () => {
  const response = await feedApi.deletePost(id)
  if (response.status === 202) {
    alert('Error during deleting post.')
  }
}
export const reqAndSetPosts = (): ThunkType => async (dispatch) => {
  const response = await feedApi.requestPosts()
  if (response.status === 200) {
    dispatch(actions.setPosts(response.data))
  }
}
export const addComment = (body: CommentType['body'], postId: PostType['id']): ThunkType => async () => {
  const response = await feedApi.addComment(body, postId)
  if (response.status === 200) {
    console.log('ok, comment added')    
  }
}

// types
type Actions = InferActions<typeof actions>
type ThunkType = BaseThunkType<Actions>