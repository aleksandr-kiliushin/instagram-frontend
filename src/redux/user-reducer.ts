import { UserState, UserType, Notice } from './../types/types'
import { userApi } from '../api/user-api'
import { BaseThunkType, InferActions } from './store'


export const initCurUserState: UserType = {
  avatar: 'http://localhost:8000/media/static/unauthorized_user_avatar.png',
  id: 0,
  is_followed: false,
  username: '',
}


const initialState: UserState = {
  curUser: initCurUserState,
  isInitialized: false,
  notice: null,
  redirectTo: null,
  users: [],
}

export default function userReducer(state: UserState = initialState, action: Actions): UserState {

  switch (action.type) {

    case 'auth/SET_IS_INITIALIZED': {
      return {...state, isInitialized: action.is}
    }

    case 'auth/SET_NOTICE': {
      return {
        ...state,
        notice: action.notice ? {...action.notice} : null
      }
    }

    case 'auth/SET_REDIRECT_TO': {
      return {...state, redirectTo: action.to}
    }

    case 'auth/SET_USER_DATA': {
      return {...state, curUser: {...action}}
    }

    case 'auth/SET_USERS': {
      return {...state, users: [...action.users]}
    }

    default:
      return state
  }
}

export const actions = {
  setNotice: (notice: Notice) => ({type: 'auth/SET_NOTICE', notice} as const),
  setIsInitialized: (is: boolean) => ({type: 'auth/SET_IS_INITIALIZED', is} as const),
  setRedirectTo: (to: string | null) => ({type: 'auth/SET_REDIRECT_TO', to} as const),
  setUserData: (data: UserType) => ({
    type: 'auth/SET_USER_DATA',
    avatar: data.avatar,
    id: data.id,
    is_followed: data.is_followed,
    username: data.username,
  } as const),
  setUsers: (users: UserType[]) => ({type: 'auth/SET_USERS', users} as const),
}


export const deleteAvatar = (): ThunkType => async () => {
  const response = await userApi.deleteAvatar()
  if (response.status === 200) {
    alert('avatar deleted')
  } else {
    alert('avatar NOT deleted')
  }
}
export const follow = (id: number): ThunkType => async () => {
  const response = await userApi.follow(id)
  if (response.status === 200) {
    alert('ok, followed')
  } else {
    alert('error while following')
  }
}
export const initAuth = (): ThunkType => async (dispatch) => {
  const response = await userApi.initAuth()
  if (response.status === 200) {
    dispatch(actions.setUserData(response.data))
  }
  dispatch(actions.setIsInitialized(true))
}
export const login = (username: string, password: string): ThunkType => async (dispatch) => {
  const response = await userApi.login(username, password)
  if (response.status === 200) {
		localStorage.setItem('token', response.data.token)
    dispatch(actions.setUserData(response.data))
    dispatch(actions.setRedirectTo('/'))
  } else {
    dispatch(actions.setNotice({body: response.data.msg, kind: 'err'}))
  }
}
export const register = (username: string, password: string): ThunkType => async (dispatch) => {
  const response = await userApi.register(username, password)
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
export const reqAndSetUsers = (): ThunkType => async (dispatch) => {
  const response = await userApi.reqUsers()
  if (response.status === 200) {
    dispatch(actions.setUsers(response.data))
  }
}
export const unfollow = (id: number): ThunkType => async () => {
  const response = await userApi.unfollow(id)
  if (response.status === 200) {
    alert('ok, unfollowed')
  } else {
    alert('error while unfollowing')
  }
}
export const updateAvatar = (avatar: File): ThunkType => async () => {
  const response = await userApi.updateAvatar(avatar)
  if (response.status === 200) {
    alert('avatar has been updated')
  }
}




// types
type Actions = InferActions<typeof actions>
type ThunkType = BaseThunkType<Actions>