import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import HomeIcon from '@material-ui/icons/Home'
import SendRoundedIcon from '@material-ui/icons/SendRounded'
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined'
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded'
import { CurUser } from '../../types/types'
import CommonModal from '../Common/CommonModal'


interface Props {
  curUser: CurUser
  resetCurUser: () => void
}

const HeaderBtnPane: React.FC<Props> = ({curUser, resetCurUser}) => {

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
    {text: 'Profile', cb: () => {}},
    curUser.id === 0 ? {text: 'Login', cb: onLogin} : {text: 'Logout', cb: onLogout},
  ]

  const appearance = (
    <div className="roundContainer">
      <img alt="" src={curUser.avatar} />
    </div>
  )

  return (
    <div className="header__btnPane">
      <div><HomeIcon /></div>
      <div><SendRoundedIcon /></div>
      <div><ExploreOutlinedIcon /></div>
      <div><FavoriteBorderRoundedIcon /></div>
      <CommonModal appearance={appearance} options={options} />
    </div>
  )
}

export default HeaderBtnPane