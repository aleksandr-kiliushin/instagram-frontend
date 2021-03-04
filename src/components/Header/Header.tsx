import React from 'react'
import Search from './Search'
import HeaderLogo from './HeaderLogo'
import HeaderBtnPane from './HeaderBtnPane'
import { CurUser } from '../../types/types'


interface Props {
  curUser: CurUser
}

const Header: React.FC<Props> = ({curUser}) => {
  return (
    <div className="header">
      <div>
        <HeaderLogo />
        <Search />
        <HeaderBtnPane curUser={curUser} />
      </div>
    </div>
  )
}

export default Header