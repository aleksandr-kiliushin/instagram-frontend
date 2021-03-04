import React from 'react'
import Search from './Search'
import HeaderLogo from './HeaderLogo'
import HeaderBtnPane from './HeaderBtnPane'
import { CurUser } from '../../types/types'


interface Props {
  curUser: CurUser
  logout: () => void
}

const Header: React.FC<Props> = ({curUser, logout}) => {
  return (
    <div className="header">
      <div>
        <HeaderLogo />
        <Search />
        <HeaderBtnPane curUser={curUser} logout={logout} />
      </div>
    </div>
  )
}

export default Header