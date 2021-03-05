import { CurUser } from './../types/types'
import { authApi } from '../api/auth-api'
import { BaseThunkType, InferActions } from './store'


export const initCurUserState: CurUser = {
  avatar: 'http://localhost:8000/media/static/unauthorized_user_avatar.png',
  id: 0,
  username: '',
}


const initialState: AuthState = {
  curUser: initCurUserState,
  errMsg: '',
  isInitialized: false,
  redirectTo: '',
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
      return {...state, errMsg: action.msg}
    }

    case 'auth/SET_REDIRECT_TO': {
      return {...state, redirectTo: action.to}
    }

    case 'auth/SET_IS_INITIALIZED': {
      return {...state, isInitialized: action.is}
    }

    default:
      return state
  }
}

export const actions = {
  setErrMsg: (msg: string) => ({type: 'auth/SET_ERR_MSG', msg} as const),
  setIsInitialized: (is: boolean) => ({type: 'auth/SET_IS_INITIALIZED', is} as const),
  setRedirectTo: (to: string) => ({type: 'auth/SET_REDIRECT_TO', to} as const),
  setUserData: (data: CurUser) => ({
    type: 'auth/SET_USER_DATA',
    avatar: data.avatar,
    id: data.id,
    username: data.username
  } as const),
}


export const initAuth = (): ThunkType => async (dispatch) => {
  const response = await authApi.initAuth()
  if (response.status === 200) {
    dispatch(actions.setUserData(response.data))
  }
  dispatch(actions.setIsInitialized(true))
}
export const login = (username: string, password: string): ThunkType => async (dispatch) => {
  const response = await authApi.login(username, password)
  if (response.status === 200) {
		localStorage.setItem('token', response.data.token)
    dispatch(actions.setUserData(response.data))
  } else {
    dispatch(actions.setErrMsg(response.data.msg))
  }
}
export const register = (username: string, password: string): ThunkType => async (dispatch) => {
  const response = await authApi.register(username, password)
  if (response.status === 200) {
    dispatch(actions.setRedirectTo('/login'))
  } else {
    dispatch(actions.setErrMsg(response.data.msg))
  }
}
export const resetCurUser = (): ThunkType => async (dispatch) => {
  dispatch(actions.setUserData(initCurUserState))
}



// types
type Actions = InferActions<typeof actions>
type ThunkType = BaseThunkType<Actions>

interface AuthState {
  curUser: CurUser
  errMsg: string
  isInitialized: boolean
  redirectTo: string
}
