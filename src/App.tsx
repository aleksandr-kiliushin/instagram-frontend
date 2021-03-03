import React, { useEffect, useState } from 'react'
// import InstContainer from './components/InstContainer'
import {connect} from 'react-redux'
import { RootState } from './redux/store'
import {requestAndSetToken} from './redux/auth-reducer'


const App: React.FC<Props> = ({requestAndSetToken}) => {

  // const [token, setToken] = useState('')

  // useEffect(() => {
  //   const token = localStorage.getItem('token')
  //   if (token !== null) setToken(token)
  // }, [])

  // useEffect(() => {
  //   if (token) {

  //   }
  // })


  const [username, setUsername] = useState('user7')
  const [password, setPassword] = useState('user7password')
  const onLogin = () => {
    requestAndSetToken(username, password)
  }


  // const whenTokenIs = <div>Hello. Logging in because you token is in localStorage: {token}.</div>
  // const whenTokenIsNot = (
  //   <div>
  //     <input login />
  //   </div>
  // )
  
  // return token ? whenTokenIs : whenTokenIsNot


  return (
    <div className="app">
      <div>
        <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
        <input type="text" value={password} onChange={e => setPassword(e.target.value)} />
        <button onClick={onLogin}>Log in</button>
      </div>
    </div>
  )
}

const mapStateToProps = (state: RootState): MapStatePropsType => ({})
const mapDispatchToProps: MapDispatchPropsType = {
  requestAndSetToken,
}

export default connect
  <MapStatePropsType, MapDispatchPropsType, {}, RootState>
  (mapStateToProps, mapDispatchToProps)(App)

type MapStatePropsType = {}
type MapDispatchPropsType = {
  requestAndSetToken: (username: string, password: string) => void
}
type Props = MapStatePropsType & MapDispatchPropsType

