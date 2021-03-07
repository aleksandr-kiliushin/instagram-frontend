import React from 'react'
import { useHistory } from 'react-router'


const HeaderLogo: React.FC<Props> = () => {

  const history = useHistory()

  return (
    <img
      alt=""
      className="header__logo"
      onClick={() => history.push('/')}
      src="http://localhost:8000/media/static/header_logo.png"
    />
  )
}

export default HeaderLogo



// types

interface Props {}