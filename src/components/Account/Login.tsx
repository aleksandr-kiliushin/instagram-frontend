import React, { useEffect, useState } from 'react'
import HeaderLogo from '../Header/HeaderLogo'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { RootState } from '../../redux/store'
import { login } from '../../redux/auth-reducer'


const Login: React.FC<Props> = ({errMsg, id, login}) => {

  const [username, setUsername] = useState('user7')
  const [password, setPassword] = useState('user7password')
  const history = useHistory()
  const onLogin = () => {
    login(username, password)
  }
  useEffect(() => {
    // use snackbar from material ui.
    if (id) history.push('/')
  }, [history, id])

  return (
    <div className="accWindow">
      <HeaderLogo />
      <input onChange={e => setUsername(e.target.value)} type="text" value={username}/>
      <input onChange={e => setPassword(e.target.value)} type="text" value={password}/>
      {errMsg ? <p style={{color: 'red'}}>{errMsg}</p> : null}
      <button onClick={onLogin}>Log in</button>
      <button disabled>Forgot password?</button>
      <p>Don't have an account?</p>
      <button disabled>Sign up</button>
    </div>
  )
}

const mapStateToProps = (state: RootState): MapStatePropsType => ({
  errMsg: state.auth.errMsg,
  id: state.auth.curUser.id,
})

const mapDispatchToProps: MapDispatchPropsType = {
  login,
}

export default connect
  <MapStatePropsType, MapDispatchPropsType, {}, RootState>
  (mapStateToProps, mapDispatchToProps)(Login)



// types

type MapStatePropsType = {
  errMsg: string
  id: number
}
type MapDispatchPropsType = {
  login: (username: string, password: string) => void
}
type Props = MapStatePropsType & MapDispatchPropsType