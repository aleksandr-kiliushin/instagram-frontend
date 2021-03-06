import { AuthState, CurUser, Notice } from './../types/types'
import { authApi } from '../api/auth-api'
import { BaseThunkType, InferActions } from './store'


export const initCurUserState: CurUser = {
  avatar: 'http://localhost:8000/media/static/unauthorized_user_avatar.png',
  id: 0,
  username: '',
}


const initialState: AuthState = {
  curUser: initCurUserState,
  notice: null,
  isInitialized: false,
  redirectTo: null,
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
        notice: action.notice ? {...action.notice} : null
      }
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
  setNotice: (notice: Notice) => ({type: 'auth/SET_ERR_MSG', notice} as const),
  setIsInitialized: (is: boolean) => ({type: 'auth/SET_IS_INITIALIZED', is} as const),
  setRedirectTo: (to: string | null) => ({type: 'auth/SET_REDIRECT_TO', to} as const),
  setUserData: (data: CurUser) => ({
    type: 'auth/SET_USER_DATA',
    avatar: data.avatar,
    id: data.id,
    username: data.username,
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
    dispatch(actions.setRedirectTo('/'))
  } else {
    dispatch(actions.setNotice({body: response.data.msg, kind: 'err'}))
  }
}
export const register = (username: string, password: string): ThunkType => async (dispatch) => {
  const response = await authApi.register(username, password)
  if (response.status === 200) {
    dispatch(actions.setRedirectTo('/login'))
    dispatch(actions.setNotice({body: response.data.msg, kind: 'suc'}))
  } else {
    dispatch(actions.setNotice({body: response.data.msg, kind: 'err'}))
  }
}
export const resetCurUser = (): ThunkType => async (dispatch) => {
  dispatch(actions.setUserData(initCurUserState))
}



// types
type Actions = InferActions<typeof actions>
type ThunkType = BaseThunkType<Actions>