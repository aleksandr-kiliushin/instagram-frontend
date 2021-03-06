import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { RootState } from '../../redux/store'
import { useHistory } from 'react-router'
import { actions, register } from '../../redux/auth-reducer'
import { Button, TextField } from '@material-ui/core'
import { Notice } from '../../types/types'
import AccNotice from './AccNotice'


const Register: React.FC<Props> = ({notice, redirectTo, register, setNotice, setRedirectTo}) => {

  const history = useHistory()


  const [username, setUsername] = useState('')
  const [password1, setPassword1] = useState('')
  const [password2, setPassword2] = useState('')


  const [isDisabled, setIsDisabled] = useState(true)


  useEffect(() => {
    if (username && password1 && password2) {
      if (password1 === password2) {
        setIsDisabled(false)
        setNotice(null)
      } else {
        setIsDisabled(true)
        setNotice({body: 'Passwords don\'t match.', kind: 'err'})
      }
    } else {
      setIsDisabled(true)
    }
  }, [username, password1, password2, setIsDisabled, setNotice])

  
  const onRegister = () => {
    register(username, password1)
  }


  useEffect(() => {
    if (redirectTo) {
      setRedirectTo(null)
      history.push(redirectTo)
    }
  }, [history, redirectTo, setRedirectTo])

  
  return (
    <div className="acc">
      <h1>Instagram</h1>

      <TextField label="Username" onChange={e => setUsername(e.target.value)} type="text" value={username}/>

      <TextField label="Password" onChange={e => setPassword1(e.target.value)} type="password" value={password1}/>
      <TextField label="Confirm password" onChange={e => setPassword2(e.target.value)} type="password" value={password2}/>
      <Button disabled={isDisabled} onClick={onRegister}>Register</Button>

      <AccNotice notice={notice} />

      <p>Already have an accout?</p>
      <Button onClick={() => history.push('/login')}>Sign in</Button>

    </div>
  )
}

const mapStateToProps = (state: RootState): MapStateProps => ({
  notice: state.auth.notice,
  redirectTo: state.auth.redirectTo,
})

const {setNotice, setRedirectTo} = {...actions}
const mapDispatchToProps: MapDispatchProps = {
  register,
  setNotice,
  setRedirectTo,
}

export default connect
  <MapStateProps, MapDispatchProps, {}, RootState>
  (mapStateToProps, mapDispatchToProps)(Register)



// types

type MapStateProps = {
  notice: Notice
  redirectTo: string | null
}
type MapDispatchProps = {
  register: (username: string, password: string) => void
  setNotice: (notice: Notice) => void
  setRedirectTo: (to: string | null) => void
}
type Props = MapStateProps & MapDispatchProps