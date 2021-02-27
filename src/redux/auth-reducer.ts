import { AuthState } from './../types/types';
import { authApi } from '../api/auth-api'
import { BaseThunkType, InferActions } from './store'


const initialState: AuthState = {
  authUser: {
    id: 0,
    username: '',
  },
}

const authReducer = (state: AuthState = initialState, action: Actions): AuthState => {

  switch (action.type) {

    case 'SET_AUTH_USER_DATA': {
      return {
        ...state,
        authUser: {
          id: action.id,
          username: action.username,
        }
      }
    }

    default:
      return state
  }
}

export const actions = {
  setAuthUserData: (id: number, username: string) => ({type: 'SET_AUTH_USER_DATA', id, username} as const),
}



export const tempAuthName = (authUsername: string, password: string): ThunkType => async (dispatch) => {
  const status = await authApi.tempAuthName(authUsername, password)
  if (status === 200) {
    const authUserData = await authApi.getUserData(authUsername)
    dispatch(actions.setAuthUserData(authUserData.id, authUserData.username))
  }
}
export const register = (username: string, password: string): ThunkType => async () => {
  await authApi.register(username, password)
}
export const testHello = (): ThunkType => async () => {
  await authApi.testHello()
}

export default authReducer



// types
type Actions = InferActions<typeof actions>
type ThunkType = BaseThunkType<Actions>