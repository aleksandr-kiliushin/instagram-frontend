import React from 'react'
import Header from './Header/Header'
import {connect} from 'react-redux'
import { RootState } from '../redux/store'
import { CurUser } from '../types/types'
import {logout} from '../redux/auth-reducer'


const InstContainer: React.FC<Props> = ({curUser, logout}) => {

  return (
    <div>
      <Header curUser={curUser} logout={logout}/>
    </div>
  )
}

const mapStateToProps = (state: RootState): MapStatePropsType => ({
  curUser: state.auth.curUser,
})


const mapDispatchToProps: MapDispatchPropsType = {
  logout,
}


export default connect
  <MapStatePropsType, MapDispatchPropsType, {}, RootState>
  (mapStateToProps, mapDispatchToProps)(InstContainer)




// types

type MapStatePropsType = {
  curUser: CurUser
}
type MapDispatchPropsType = {
  logout: () => void
}
type Props = MapStatePropsType & MapDispatchPropsType