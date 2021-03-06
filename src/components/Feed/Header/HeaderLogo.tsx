import React from 'react'


interface Props {}

const HeaderLogo: React.FC<Props> = () => {
  return (
    <img
      className="header__logo"
      src="http://localhost:8000/media/static/header_logo.png"
      alt="instagramLogo"
    />
  )
}

export default HeaderLogo