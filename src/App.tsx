import React, { useEffect, useState } from 'react'
import InstContainer from './components/InstContainer'
import {connect} from 'react-redux'
import { RootState } from './redux/store'
import {} from './redux/auth-reducer'


const App: React.FC<Props> = () => {

  // const [token, setToken] = useState('')

  // useEffect(() => {
  //   const token = localStorage.getItem('token')
  //   if (token !== null) setToken(token)
  // }, [])

  // useEffect(() => {
  //   if (token) {

  //   }
  // })


  // const [login, setLogin] = useState('')
  // const [password, setPassword] = useState('')


  // const whenTokenIs = <div>Hello. Logging in because you token is in localStorage: {token}.</div>
  // const whenTokenIsNot = (
  //   <div>
  //     <input login />
  //   </div>
  // )
  
  // return token ? whenTokenIs : whenTokenIsNot


  return (
    <div className="app">
      <InstContainer />
    </div>
  )
}

const mapStateToProps = (state: RootState): MapStatePropsType => ({})
const mapDispatchToProps: MapDispatchPropsType = {}

export default connect
  <MapStatePropsType, MapDispatchPropsType, {}, RootState>
  (mapStateToProps, mapDispatchToProps)(App)

type MapStatePropsType = {}
type MapDispatchPropsType = {}
type Props = MapStatePropsType & MapDispatchPropsType

