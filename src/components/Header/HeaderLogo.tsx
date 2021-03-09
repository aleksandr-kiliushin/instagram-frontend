import React from 'react'
import { useHistory } from 'react-router'
import { url } from '../../utils/utils'


const HeaderLogo: React.FC<Props> = () => {

  const history = useHistory()

  return (
    <img
      alt=""
      className="header__logo"
      onClick={() => history.push('/')}
      src={`${url}media/static/header_logo.png`}
    />
  )
}

export default HeaderLogo



// types

interface Props {}