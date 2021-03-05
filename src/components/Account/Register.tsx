import React, { useState } from 'react'
import HeaderLogo from '../Header/HeaderLogo'
import { connect } from 'react-redux'
import { RootState } from '../../redux/store'
import { useHistory } from 'react-router'


const Register: React.FC<Props> = () => {

  const history = useHistory()

  const [username, setUsername] = useState('user')
  const [password1, setPassword1] = useState('userpassword')
  const [password2, setPassword2] = useState('userpassword')
  
  const onRegister = () => {
    if (username && password1 && password2) {
      if (password1 === password2) {
        alert('data sended to server')
      } else {
        alert('passwords dont match')
      }
    } else {
      alert('Each field is required.')
    }
  }
  
  return (
    <div className="accWindow">
      <HeaderLogo />
      <input onChange={e => setUsername(e.target.value)} type="text" value={username}/>
      <input onChange={e => setPassword1(e.target.value)} type="text" value={password1}/>
      <input onChange={e => setPassword2(e.target.value)} type="text" value={password2}/>
      <button onClick={onRegister}>Register</button>
      <p>Already have an accout?</p>
      <button onClick={() => history.push('/login')}>Sign in</button>
    </div>
  )
}

const mapStateToProps = (state: RootState): MapStateProps => ({
})

const mapDispatchToProps: MapDispatchProps = {
  
}

export default connect
  <MapStateProps, MapDispatchProps, {}, RootState>
  (mapStateToProps, mapDispatchToProps)(Register)



// types

type MapStateProps = {
  
}
type MapDispatchProps = {
  
}
type Props = MapStateProps & MapDispatchProps