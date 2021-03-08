import { actions } from '../redux/actions'
import store from '../redux/store'


const { setAlert } = { ...actions }

export default function loginRequired(func: Function) {
  const curUserId = store.getState().user.curUser.id
  if (curUserId === 0) {
    store.dispatch(setAlert({body: 'Please login to check full features.', severity: 'info'}))
  } else {
    func()
  }
}