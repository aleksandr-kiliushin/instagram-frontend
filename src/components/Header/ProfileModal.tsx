import React, { useEffect, useState } from 'react'
import Modal from '@material-ui/core/Modal'
import { UserType } from '../../types/types'
import { useHistory } from 'react-router';
import loginRequired from '../../utils/utils';


const ProfileModal: React.FC<Props> = ({avatar, deleteAvatar, logout, updateAvatar, userId}) => {
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)


  const [image, setImage] = useState<File>()
  const onImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputedImages = e.target.files
    if (inputedImages) {
      setImage(inputedImages[0])
    }
  }
  const onCommit = () => {
    if (image) {
      loginRequired(() => updateAvatar(image))
      handleClose()
    }
  }


  const history = useHistory()
  const onLogin = () => history.push('/login')
  const [needLogout, setNeedLogout] = useState(false)
  const onLogout = () => setNeedLogout(true)
  useEffect(() => {
    if (needLogout) {
      logout()
      history.push('/login')
      localStorage.removeItem('token')
    }
  }, [history, logout, needLogout])


  const onDeleteAvatar = () => {
    loginRequired(() => deleteAvatar())
    handleClose()
  }


  return (
    <div>
      <div className="roundContainer" onClick={handleOpen}>
        <img alt="" src={avatar} />
      </div>
      <Modal open={open} onClose={handleClose}>
        <div className="modalOuter">
          <div className="modal">

            <button>
              <label htmlFor="avatar">
                <div className="pointer">Select new avatar</div>
                <input onChange={onImageChange} type="file" id="avatar" />
              </label>
            </button>
            <button onClick={onCommit}>Upload selected avatar</button>

            <button onClick={onDeleteAvatar}>Delete avatar</button>

            {
              userId === 0
                ? <button onClick={onLogin}>Login</button>
                : <button onClick={onLogout} style={{color: 'red'}}>Logout</button>
            }

            <button onClick={handleClose}>Cancel</button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default ProfileModal




// types

interface Props {
  avatar: UserType['avatar']
  deleteAvatar: () => void
  logout: () => void
  updateAvatar: (avatar: File) => void
  userId: UserType['id']
}