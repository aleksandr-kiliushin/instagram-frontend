import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { RootState } from '../../redux/store'
import { actions, login } from '../../redux/user-reducer'
import { Notice } from '../../types/types'
import AccNotice from './AccNotice'


const Login: React.FC<Props> = ({id, login, notice, redirectTo, setNotice, setRedirectTo}) => {


  useEffect(() => {
    if (redirectTo) {
      setRedirectTo(null)
    }
  }, [redirectTo, setRedirectTo])

  
  const history = useHistory()


  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')


  const [isDisabled, setIsDisabled] = useState(true)
  useEffect(() => {
    if (username && password) {
      setIsDisabled(false)
      setNotice(null)
    }
    else {
      setIsDisabled(true)
    }
  }, [password, setIsDisabled, setNotice, username])


  const onLogin = () => login(username, password)
  useEffect(() => {
    if (id) {
      history.push('/')
    }
  }, [history, id])


  return (
    <div className="acc">
      <h1>Instagram</h1>

      <TextField label="Username" onChange={e => setUsername(e.target.value)} type="text" value={username} />
      <TextField label="Password" onChange={e => setPassword(e.target.value)} type="password" value={password} />
      <Button disabled={isDisabled} onClick={onLogin}>Log in</Button>

      <AccNotice notice={notice} />

      <p>Don't have an account?</p>
      <Button onClick={() => history.push('/register')}>Sign up</Button>
    </div>
  )
}

const mapStateToProps = (state: RootState): MapStateProps => ({
  id: state.user.curUser.id,
  notice: state.user.notice,
  redirectTo: state.user.redirectTo,
})

const {setNotice, setRedirectTo} = {...actions}
const mapDispatchToProps: MapDispatchProps = {
  login,
  setNotice,
  setRedirectTo,
}

export default connect
  <MapStateProps, MapDispatchProps, {}, RootState>
  (mapStateToProps, mapDispatchToProps)(Login)



// types

type MapStateProps = {
  id: number
  notice: Notice
  redirectTo: string | null
}
type MapDispatchProps = {
  login: (username: string, password: string) => void
  setNotice: (notice: Notice) => void
  setRedirectTo: (to: string | null) => void
}
type Props = MapStateProps & MapDispatchProps