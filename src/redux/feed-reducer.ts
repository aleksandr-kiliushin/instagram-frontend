import { BaseThunkType, InferActions } from './store';
import {InstState, PostType} from '../types/types'
import {feedApi} from '../api/feed-api'


const initialState: InstState = {
  isInitializing: false,
  posts: [],
}

export default function feedReducer(state: InstState = initialState, action: Actions): InstState {

  switch (action.type) {

    case 'SET_IS_INITIALIZING': {
      return {...state, isInitializing: action.isInitializing}
    }

    case 'SET_INIT_POSTS': {
      return {...state, posts: action.posts}
    }

    default:
      return state
  }
}

export const actions = {
  setIsInitializing: (isInitializing: boolean) => ({type: 'SET_IS_INITIALIZING', isInitializing} as const),
  setPosts: (posts: PostType[]) => ({type: 'SET_INIT_POSTS', posts} as const),
}



export const addComment = (body: string, postId: number): ThunkType => async (dispatch, getState) => {
  const authorId = getState().auth.id
  await feedApi.addComment(authorId, body, postId)
}
export const deleteComment = (commentId: number): ThunkType => async () => {
  await feedApi.deleteComment(commentId)
}
export const addPost = (caption: string, images: FileList): ThunkType => async (dispatch, getState) => {
  const ownerId = getState().auth.id
  await feedApi.addPost(caption, images, ownerId)
}
export const deletePost = (postId: number): ThunkType => async () => {
  await feedApi.deletePost(postId)
}
export const requestPosts = (): ThunkType => async (dispatch) => {
  const data = await feedApi.requestPosts()
  dispatch(actions.setPosts(data))
}
export const initRequestAndSetPosts = (): ThunkType => async (dispatch/*, getState*/) => {
  // const authUserId = getState().auth.authUser.id // do not use
  dispatch(actions.setIsInitializing(true))
  const data = await feedApi.requestPosts()
  dispatch(actions.setIsInitializing(false))
  dispatch(actions.setPosts(data))
}


// types
type Actions = InferActions<typeof actions>
type ThunkType = BaseThunkType<Actions>