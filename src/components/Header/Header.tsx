import React from 'react'
import HeaderLogo from './HeaderLogo'
import HeaderBtnPane from './HeaderBtnPane'
import { connect } from 'react-redux'
import { RootState } from '../../redux/store'
import { UserType } from '../../types/types'
import { addPost, deleteAvatar, logout, updateAvatar } from '../../redux/actions'


const Header: React.FC<Props> = ({addPost, curUser, deleteAvatar, logout, updateAvatar}) => {
  return (
    <div className="header">
      <div>
        <HeaderLogo />
        <HeaderBtnPane
          addPost={addPost}
          curUser={curUser}
          deleteAvatar={deleteAvatar}
          logout={logout}
          updateAvatar={updateAvatar}
        />
      </div>
    </div>
  )
}

const mapStateToProps = (state: RootState): MapStateProps => ({
  curUser: state.user.curUser,
})
// const {} = {...actions}
const mapDispatchToProps: MapDispatchProps = {
  addPost,
  deleteAvatar,
  logout,
  updateAvatar,
}


export default connect
  <MapStateProps, MapDispatchProps, {}, RootState>
  (mapStateToProps, mapDispatchToProps)(Header)




// types

type MapStateProps = {
  curUser: UserType
}
type MapDispatchProps = {
  addPost: (caption: string, images: FileList) => void
  deleteAvatar: () => void
  logout: () => void
  updateAvatar: (avatar: File) => void
}
type Props = MapStateProps & MapDispatchProps