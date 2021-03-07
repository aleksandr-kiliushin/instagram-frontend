import React from 'react'
import HeaderLogo from './HeaderLogo'
import HeaderBtnPane from './HeaderBtnPane'
import { connect } from 'react-redux'
import { RootState } from '../../redux/store'
import { UserType } from '../../types/types'
import { deleteAvatar, resetCurUser, updateAvatar } from '../../redux/user-reducer'
import { addPost } from '../../redux/feed-reducer'


const Header: React.FC<Props> = ({addPost, curUser, deleteAvatar, resetCurUser, updateAvatar}) => {
  return (
    <div className="header">
      <div>
        <HeaderLogo />
        <HeaderBtnPane
          addPost={addPost}
          curUser={curUser}
          deleteAvatar={deleteAvatar}
          resetCurUser={resetCurUser}
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
  resetCurUser,
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
  resetCurUser: () => void
  updateAvatar: (avatar: File) => void
}
type Props = MapStateProps & MapDispatchProps