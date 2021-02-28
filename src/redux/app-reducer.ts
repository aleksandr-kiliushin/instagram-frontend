import { BaseThunkType, InferActions } from './store'


const initialState: AppState = {
  isInitializing: false  
}

export default function appReducer (state: AppState = initialState, action: Actions): AppState {

  switch (action.type) {

    case 'FAKE': {
      return state
    }

    default:
      return state
  }
}

export const actions = {
  setAuthUserData: () => ({type: 'FAKE'} as const),
}

export const fake = (): ThunkType => async () => {
  
}


// types
type Actions = InferActions<typeof actions>
type ThunkType = BaseThunkType<Actions>

interface AppState {
  isInitializing: boolean
}