import React from 'react'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  header: {
    backgroundColor: 'white',
    borderBottom: '1px solid lightgray',
    height: 54,
    objectFit: 'contain',
  },
  image: {
    padding: 12.5,
  }
})

const Header = () => {
  const s = useStyles()
  return (
    <div>
      <div className={s.header}>
        <img
          className={s.image}
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="instagramLogo"
        />
      </div>
    </div>
  )
}

export default Header