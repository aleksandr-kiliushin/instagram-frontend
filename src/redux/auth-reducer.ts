import { CurUser } from './../types/types';
import { authApi } from '../api/auth-api'
import { BaseThunkType, InferActions } from './store'


const initialState: AuthState = {
  curUser: {
    avatar: 'http://localhost:8000/media/static/unauthorized_user_avatar.png',
    id: 0,
    username: '',
  },
  errMsg: '',
}

export default function authReducer(state: AuthState = initialState, action: Actions): AuthState {

  switch (action.type) {

    case 'auth/SET_USER_DATA': {
      return {
        ...state,
        curUser: {avatar: action.avatar, id: action.id, username: action.username},
      }
    }

    case 'auth/SET_ERR_MSG': {
      return {
        ...state,
        errMsg: action.msg,
      }
    }

    default:
      return state
  }
}

export const actions = {
  setUserData: (curUser: CurUser) => ({
    type: 'auth/SET_USER_DATA',
    avatar: curUser.avatar,
    id: curUser.id,
    username: curUser.username
  } as const),
  setErrMsg: (msg: string) => ({type: 'auth/SET_ERR_MSG', msg} as const),
}


export const login = (username: string, password: string): ThunkType => async (dispatch) => {
  const response = await authApi.requestAndSetToken(username, password)
  if (response.status === 200) {
		localStorage.setItem('token', response.data.token)
    dispatch(actions.setUserData(response.data))
  } else {
    dispatch(actions.setErrMsg(response.data.msg))
  }
}
export const logout = (): ThunkType => async (dispatch) => {
  dispatch(actions.setUserData(initialState.curUser))
  localStorage.removeItem('token')
}


// export const register = (username: string, password: string): ThunkType => async () => {
  // await authApi.register(username, password)
// }
// export const updateUserData = (avatar: File, bio: string): ThunkType => async (dispatch, getState) => {
  // const username = getState().auth.authUser.username
  // await authApi.updateUserData(avatar, bio, 'username')
// }
// export const like = (postId: number): ThunkType => async (dispatch, getState) => {
  // const userId = getState().auth.authUser.id
  // await authApi.like(postId, 11)
// }
// export const follow = (followedUserId: number): ThunkType => async (dispatch, getState) => {
  // const userId = getState().auth.authUser.id
  // await authApi.follow(followedUserId, 11)
// }


// types
type Actions = InferActions<typeof actions>
type ThunkType = BaseThunkType<Actions>

interface AuthState {
  curUser: CurUser
  errMsg: string
}
