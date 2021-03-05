import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { RootState } from '../../redux/store'
import { actions, login } from '../../redux/auth-reducer'


const Login: React.FC<Props> = ({errMsg, id, login, setErrMsg}) => {
  
  const history = useHistory()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const onLogin = () => {
    login(username, password)
  }
  useEffect(() => {
    if (id) history.push('/')
  }, [history, id])


  useEffect(() => {
    if (errMsg) {
      setTimeout(() => {
        setErrMsg('')
      }, 5000)
    }
  }, [errMsg, setErrMsg])


  return (
    <div className="acc">
      <h1>Instagram</h1>

      <TextField label="Username" onChange={e => setUsername(e.target.value)} type="text" value={username} />
      <TextField label="Password" onChange={e => setPassword(e.target.value)} type="password" value={password} />
      <Button onClick={onLogin}>Log in</Button>

      <div className="err">
        {errMsg ? <p>{errMsg}</p> : null}
      </div>

      <p>Don't have an account?</p>
      <Button onClick={() => history.push('/register')}>Sign up</Button>
    </div>
  )
}

const mapStateToProps = (state: RootState): MapStateProps => ({
  errMsg: state.auth.errMsg,
  id: state.auth.curUser.id,
})

const {setErrMsg} = {...actions}
const mapDispatchToProps: MapDispatchProps = {
  setErrMsg,
  login,
}

export default connect
  <MapStateProps, MapDispatchProps, {}, RootState>
  (mapStateToProps, mapDispatchToProps)(Login)



// types

type MapStateProps = {
  errMsg: string
  id: number
}
type MapDispatchProps = {
  login: (username: string, password: string) => void
  setErrMsg: (msg: string) => void
}
type Props = MapStateProps & MapDispatchProps