import { AuthState, User } from './../types/types';
import { authApi } from '../api/auth-api'
import { BaseThunkType, InferActions } from './store'


const initialState: AuthState = {
  authUser: {
    id: 0,
    profile: {
      avatar: '',
      bio: '',
    },
    username: '',
  },
}

const authReducer = (state: AuthState = initialState, action: Actions): AuthState => {

  switch (action.type) {

    case 'SET_AUTH_USER_DATA': {
      return {
        ...state,
        authUser: {
          id: action.userData.id,
          profile: {
            avatar: action.userData.profile.avatar,
            bio: action.userData.profile.bio,
          },
          username: action.userData.username,
        }
      }
    }

    default:
      return state
  }
}

export const actions = {
  setAuthUserData: (userData: User) => ({type: 'SET_AUTH_USER_DATA', userData} as const),
}


export const tempAuthName = (authUsername: string, password: string): ThunkType => async (dispatch) => {
  const status = await authApi.tempAuthName(authUsername, password)
  if (status === 200) {
    const userData = await authApi.getUserData(authUsername)
    dispatch(actions.setAuthUserData(userData))
  }
}
export const register = (username: string, password: string): ThunkType => async () => {
  await authApi.register(username, password)
}
export const updateUserData = (avatar: File, bio: string): ThunkType => async (dispatch, getState) => {
  const username = getState().auth.authUser.username
  await authApi.updateUserData(avatar, bio, username)
}
export const testHello = (): ThunkType => async () => {
  await authApi.testHello()
}
export const like = (postId: number): ThunkType => async (dispatch, getState) => {
  const userId = getState().auth.authUser.id
  await authApi.like(postId, userId)
}

export default authReducer



// types
type Actions = InferActions<typeof actions>
type ThunkType = BaseThunkType<Actions>