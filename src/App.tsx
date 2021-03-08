import React, { useEffect } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from './components/Account/Login'
import Register from './components/Account/Register'
import { RootState } from './redux/store'
import { connect } from 'react-redux'
import { initAuth, actions } from './redux/actions'
import Feed from './components/Feed/Feed'
import Users from './components/Users/Users'
import { Alert } from '@material-ui/lab'
import { AlertType } from './types/types'


const App: React.FC<Props> = ({alert, initAuth, isInitialized, setAlert}) => {

  useEffect(() => {
    if (!isInitialized) {
      initAuth()
    }
  }, [initAuth, isInitialized])


  useEffect(() => {
    if (alert) {
      setTimeout(() => {
        setAlert(null)
      }, 5000)
    }
  }, [alert, setAlert])


  if (!isInitialized) {
    return <img className="app__preloader" src="http://localhost:8000/media/static/preloading.png" alt=""/>
  }


  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Feed} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/users" component={Users} />
        </Switch>

        {alert &&
          <div className="alert">
            <Alert severity={alert.severity}>
              {alert.body}
            </Alert>
          </div>
        }

      </div>
    </Router>
  )
}

const mapStateToProps = (state: RootState): MapStateProps => ({
  alert: state.app.alert,
  isInitialized: state.user.isInitialized,
})

const {setAlert} = {...actions}
const mapDispatchToProps: MapDispatchProps = {
  initAuth,
  setAlert,
}


export default connect
  <MapStateProps, MapDispatchProps, {}, RootState>
  (mapStateToProps, mapDispatchToProps)(App)




// types
type MapStateProps = {
  alert: AlertType
  isInitialized: boolean
}
type MapDispatchProps = {
  initAuth: () => void
  setAlert: (alert: AlertType) => {}
}
type Props = MapStateProps & MapDispatchProps