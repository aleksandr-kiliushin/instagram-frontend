import React from 'react'
import Header from './Header/Header'
import { connect } from 'react-redux'
import { RootState } from '../redux/store'
import { CurUser } from '../types/types'
import { resetCurUser } from '../redux/auth-reducer'


const InstContainer: React.FC<Props> = ({curUser, resetCurUser}) => {
  return (
    <div>
      <Header curUser={curUser} resetCurUser={resetCurUser} />
    </div>
  )
}

const mapStateToProps = (state: RootState): MapStatePropsType => ({
  curUser: state.auth.curUser,
})

// const {} = {...actions}
const mapDispatchToProps: MapDispatchPropsType = {
  resetCurUser,
}


export default connect
  <MapStatePropsType, MapDispatchPropsType, {}, RootState>
  (mapStateToProps, mapDispatchToProps)(InstContainer)




// types

type MapStatePropsType = {
  curUser: CurUser
}
type MapDispatchPropsType = {
  resetCurUser: () => void
}
type Props = MapStatePropsType & MapDispatchPropsType