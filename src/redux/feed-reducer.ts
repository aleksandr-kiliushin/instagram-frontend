import { FeedState, PostType } from '../types/types'
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


export const reqAndSetPosts = (): ThunkType => async (dispatch) => {
  const response = await feedApi.requestPosts()
  if (response.status === 200) {
    dispatch(actions.setPosts(response.data))
  }
}
export const addPost = (caption: string, images: FileList): ThunkType => async () => {
  const response = await feedApi.addPost(caption, images)
  if (response.status === 202) {
    alert('Error during publishing post.')
  }
}

// Old.

// export const addComment = (): ThunkType => async () => {
//   console.log(123)
// }
// export const addComment = (body: string, postId: number): ThunkType => async (dispatch, getState) => {
  // const authorId = getState().auth.id
//   await feedApi.addComment(11, body, postId)
// }
// export const deleteComment = (commentId: number): ThunkType => async () => {
//   await feedApi.deleteComment(commentId)
// }
// export const addPost = (caption: string, images: FileList): ThunkType => async (dispatch, getState) => {
  // const ownerId = getState().auth.id
  // await feedApi.addPost(caption, images, 11)
// }
// export const deletePost = (postId: number): ThunkType => async () => {
//   await feedApi.deletePost(postId)
// }
// export const requestPosts = (): ThunkType => async (dispatch) => {
//   const data = await feedApi.requestPosts()
//   dispatch(actions.setPosts(data))
// }
// export const initRequestAndSetPosts = (): ThunkType => async (dispatch/*, getState*/) => {
  // const authUserId = getState().auth.authUser.id // do not use
//   dispatch(actions.setIsInitializing(true))
//   const data = await feedApi.requestPosts()
//   dispatch(actions.setIsInitializing(false))
//   dispatch(actions.setPosts(data))
// }


// types
type Actions = InferActions<typeof actions>
type ThunkType = BaseThunkType<Actions>