import { actions } from '../redux/actions'
import store from '../redux/store'


const { setAlert } = { ...actions }

export function loginRequired(func: Function) {
  const curUserId = store.getState().user.curUser.id
  if (curUserId === 0) {
    store.dispatch(setAlert({body: 'Please login to check full features.', severity: 'info'}))
  } else {
    func()
  }
}

// export const url = 'http://localhost:8000/'
export const url = 'https://alexander-kilyushin-instagram.herokuapp.com/'