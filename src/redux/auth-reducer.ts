import { AuthState } from './../types/types';
import { authApi } from './../api/authApi'
import { BaseThunkType, InferActions } from './store'


const initialState: AuthState = {
  authUser: {
    id: 45,
    username: 'fwfwfwfeUESRFF',
  },
}

const authReducer = (state: AuthState = initialState, action: Actions): AuthState => {

  switch (action.type) {

    case 'FAKE': {
      return state
    }

    default:
      return state
  }
}

export const actions = {
  fake: (fake: boolean) => ({type: 'FAKE', fake} as const),
}

export const fake = (fake: number): ThunkType => async () => {
  await authApi.fake(fake)
}

export default authReducer



// types
type Actions = InferActions<typeof actions>
type ThunkType = BaseThunkType<Actions>