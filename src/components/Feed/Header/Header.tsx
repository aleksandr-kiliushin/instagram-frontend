import React from 'react'
import HeaderLogo from './HeaderLogo'
import HeaderBtnPane from './HeaderBtnPane'
import { connect } from 'react-redux'
import { RootState } from '../../../redux/store'
import { User } from '../../../types/types'
import { resetCurUser } from '../../../redux/auth-reducer'
import { addPost } from '../../../redux/feed-reducer'


const Header: React.FC<Props> = ({addPost, curUser, resetCurUser}) => {
  return (
    <div className="header">
      <div>
        <HeaderLogo />
        <HeaderBtnPane addPost={addPost} curUser={curUser} resetCurUser={resetCurUser} />
      </div>
    </div>
  )
}

const mapStateToProps = (state: RootState): MapStateProps => ({
  curUser: state.auth.curUser,
})

// const {} = {...actions}
const mapDispatchToProps: MapDispatchProps = {
  addPost,
  resetCurUser,
}


export default connect
  <MapStateProps, MapDispatchProps, {}, RootState>
  (mapStateToProps, mapDispatchToProps)(Header)




// types

type MapStateProps = {
  curUser: User
}
type MapDispatchProps = {
  addPost: (caption: string, images: FileList) => void
  resetCurUser: () => void
}
type Props = MapStateProps & MapDispatchProps