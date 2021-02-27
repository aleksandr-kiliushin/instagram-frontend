import { BaseThunkType, InferActions } from './store';
import {InstState, PostType} from './../types/types'
import {instApi} from '../api/inst-api'


const initialState: InstState = {
  isInitializing: false,
  posts: [],
}

const instReducer = (state: InstState = initialState, action: Actions): InstState => {

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
  const authorId = getState().auth.authUser.id
  await instApi.addComment(authorId, body, postId)
}
export const deleteComment = (commentId: number): ThunkType => async () => {
  await instApi.deleteComment(commentId)
}
export const addPost = (caption: string, images: FileList): ThunkType => async (dispatch, getState) => {
  const ownerId = getState().auth.authUser.id
  await instApi.addPost(caption, images, ownerId)
}
export const deletePost = (postId: number): ThunkType => async () => {
  await instApi.deletePost(postId)
}
export const initRequestAndSetPosts = (): ThunkType => async (dispatch) => {
  dispatch(actions.setIsInitializing(true))
  const data = await instApi.requestPosts()
  dispatch(actions.setIsInitializing(false))
  dispatch(actions.setPosts(data))
}

export default instReducer



// types
type Actions = InferActions<typeof actions>
type ThunkType = BaseThunkType<Actions>