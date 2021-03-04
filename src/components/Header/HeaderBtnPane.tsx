import React from 'react'
import HomeIcon from '@material-ui/icons/Home'
import SendRoundedIcon from '@material-ui/icons/SendRounded'
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined'
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded'
import { CurUser } from '../../types/types'


interface Props {
  curUser: CurUser
}

const HeaderBtnPane: React.FC<Props> = ({curUser}) => {
  return (
    <div className="header__btnPane">
      <div><HomeIcon /></div>
      <div><SendRoundedIcon /></div>
      <div><ExploreOutlinedIcon /></div>
      <div><FavoriteBorderRoundedIcon /></div>
      <div className="roundContainer">
        <img alt="" src={curUser.avatar} />
      </div>
    </div>
  )
}

export default HeaderBtnPane