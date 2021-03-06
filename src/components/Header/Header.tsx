import React from 'react'
import Search from './Search'
import HeaderLogo from './HeaderLogo'
import HeaderBtnPane from './HeaderBtnPane'
import { connect } from 'react-redux'
import { RootState } from '../../redux/store'
import { CurUser } from '../../types/types'
import { resetCurUser } from '../../redux/auth-reducer'


const Header: React.FC<Props> = ({curUser, resetCurUser}) => {
  return (
    <div className="header">
      <div>
        <HeaderLogo />
        <Search />
        <HeaderBtnPane curUser={curUser} resetCurUser={resetCurUser} />
      </div>
    </div>
  )
}

const mapStateToProps = (state: RootState): MapStateProps => ({
  curUser: state.auth.curUser,
})

// const {} = {...actions}
const mapDispatchToProps: MapDispatchProps = {
  resetCurUser,
}


export default connect
  <MapStateProps, MapDispatchProps, {}, RootState>
  (mapStateToProps, mapDispatchToProps)(Header)




// types

type MapStateProps = {
  curUser: CurUser
}
type MapDispatchProps = {
  resetCurUser: () => void
}
type Props = MapStateProps & MapDispatchProps