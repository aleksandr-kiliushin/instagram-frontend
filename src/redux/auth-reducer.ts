import { CurrentUser } from './../types/types';
import { authApi } from '../api/auth-api'
import { BaseThunkType, InferActions } from './store'


const initialState: AuthState = {
  avatar: '',
  id: 0,
  username: '',
}

export default function authReducer(state: AuthState = initialState, action: Actions): AuthState {

  switch (action.type) {

    case 'auth/SET_AUTH_USER_DATA': {
      return {avatar: action.avatar, id: action.id, username: action.username}
    }

    default:
      return state
  }
}

export const actions = {
  setUserData: (userData: CurrentUser) => ({
    type: 'auth/SET_AUTH_USER_DATA',
    avatar: userData.avatar,
    id: userData.id,
    username: userData.username
  } as const),
}


export const requestAndSetToken = (username: string, password: string): ThunkType => async (dispatch) => {
  const response = await authApi.requestAndSetToken(username, password)
  if (response.status === 200) {
    dispatch(actions.setUserData(response.data))
  }
}


export const register = (username: string, password: string): ThunkType => async () => {
  await authApi.register(username, password)
}
export const updateUserData = (avatar: File, bio: string): ThunkType => async (dispatch, getState) => {
  // const username = getState().auth.authUser.username
  await authApi.updateUserData(avatar, bio, 'username')
}
export const like = (postId: number): ThunkType => async (dispatch, getState) => {
  // const userId = getState().auth.authUser.id
  await authApi.like(postId, 11)
}
export const follow = (followedUserId: number): ThunkType => async (dispatch, getState) => {
  // const userId = getState().auth.authUser.id
  await authApi.follow(followedUserId, 11)
}


// types
type Actions = InferActions<typeof actions>
type ThunkType = BaseThunkType<Actions>

interface AuthState {
  avatar: string
  id: number
  username: string
}
