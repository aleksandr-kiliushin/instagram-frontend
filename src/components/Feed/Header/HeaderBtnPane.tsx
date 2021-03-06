import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { User } from '../../../types/types'
import CommonModal from '../../Common/CommonModal'
import AddPostModal from './AddPostModal'


const HeaderBtnPane: React.FC<Props> = ({addPost, curUser, resetCurUser}) => {

  const history = useHistory()


  const onLogin = () => history.push('/login')

  const [needLogout, setNeedLogout] = useState(false)
  const onLogout = () => setNeedLogout(true)
  useEffect(() => {
    if (needLogout) {
      resetCurUser()
      history.push('/login')
      localStorage.removeItem('token')
    }
  }, [history, needLogout, resetCurUser])


  const options: {text: string, cb: () => void}[] = [
    curUser.id === 0 ? {text: 'Login', cb: onLogin} : {text: 'Logout', cb: onLogout},
  ]
  const appearance = (
    <div className="roundContainer">
      <img alt="" src={curUser.avatar} />
    </div>
  )

  return (
    <div className="header__btnPane">
      <AddPostModal addPost={addPost} />
      <CommonModal appearance={appearance} options={options} />
    </div>
  )
}

export default HeaderBtnPane



interface Props {
  addPost: (caption: string, images: FileList) => void
  curUser: User
  resetCurUser: () => void
}