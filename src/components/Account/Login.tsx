import React, { useEffect, useState } from 'react'
import HeaderLogo from '../Header/HeaderLogo'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { RootState } from '../../redux/store'
import { login, actions } from '../../redux/auth-reducer'


const Login: React.FC<Props> = ({errMsg, id, login, setErrMsg}) => {
  
  const history = useHistory()

  const [username, setUsername] = useState('user7')
  const [password, setPassword] = useState('user7password')
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
      }, 5000);
    }
  }, [errMsg, setErrMsg])


  return (
    <div className="accWindow">
      <HeaderLogo />
      <input onChange={e => setUsername(e.target.value)} type="text" value={username}/>
      <input onChange={e => setPassword(e.target.value)} type="text" value={password}/>
      {errMsg ? <p style={{color: 'red'}}>{errMsg}</p> : null}
      <button onClick={onLogin}>Log in</button>
      <button disabled>Forgot password?</button>
      <p>Don't have an account?</p>
      <button onClick={() => history.push('/register')}>Sign up</button>
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