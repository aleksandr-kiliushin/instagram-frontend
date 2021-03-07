import React from 'react'
import { UserType } from '../../types/types'
import AddPostModal from './AddPostModal'
import ProfileModal from './ProfileModal'
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined'
import { useHistory } from 'react-router'


const HeaderBtnPane: React.FC<Props> = ({addPost, curUser, deleteAvatar, resetCurUser, updateAvatar}) => {

  const history = useHistory()

  return (
    <div className="header__btnPane">
      <div><PeopleAltOutlinedIcon onClick={() => history.push('/users')}/></div>
      <AddPostModal addPost={addPost} />
      <ProfileModal
        avatar={curUser.avatar}
        deleteAvatar={deleteAvatar}
        updateAvatar={updateAvatar}
        resetCurUser={resetCurUser}
        userId={curUser.id}
      />
    </div>
  )
}

export default HeaderBtnPane



// types

interface Props {
  addPost: (caption: string, images: FileList) => void
  curUser: UserType
  deleteAvatar: () => void
  resetCurUser: () => void
  updateAvatar: (avatar: File) => void
}