import React, { useState } from 'react'
import { User } from '../../types/types'
import HomeIcon from '@material-ui/icons/Home'
import SendRoundedIcon from '@material-ui/icons/SendRounded'
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined'
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded'
import Search from './Search'
import '../../App.css'
import './Header.css'


interface Props {
  authUser: User
  addPost: (caption: string, images: FileList) => void
  tempAuthName: (authUsername: string, password: string) => void
  register: (username: string, password: string) => void
  updateUserData: (avatar: File, bio: string) => void
}

const Header: React.FC<Props> = ({authUser, addPost, tempAuthName, register, updateUserData}) => {

  const [caption, setCaption] = useState('')
  const [images, setImages] = useState<FileList>()

  const onImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputedImages = e.target.files
    if (!inputedImages) return
    setImages(inputedImages)
  }

  const onCommit = () => {
    if (!images) return
    addPost(caption, images)
  }


  // auth
  const [authUsername, setAuthUsername] = useState('')
  const [authPassword, setAuthPassword] = useState('')
  const onLogin = () => {
    tempAuthName(authUsername, authPassword)
  }
  // registration
  const [regUsername, setRegUsername] = useState('')
  const [regPassword1, setRegPassword1] = useState('')
  const [regPassword2, setRegPassword2] = useState('')
  const onRegister = () => {
    if (regPassword1 === regPassword2) {
      register(regUsername, regPassword1)
    }
  }
  // update profile
  const [avatar, setAvatar] = useState<File>()
  const [bio, setBio] = useState('')
  const onAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputedImages = e.target.files
    if (inputedImages) {
      setAvatar(inputedImages[0])
    }
  }
  const onProfileUpdate = () => {
    if (avatar) {
      updateUserData(avatar, bio)
    }
  }


  return (
    <div className="headerOuter">
      <div className="header">
        <img
          className="header__logo"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="instagramLogo"
        />

        <div className="searchContainer">
          <Search />
        </div>

        <div className="header__buttonsPane">
          <HomeIcon className="header__buttonsPane_button" />
          <SendRoundedIcon className="header__buttonsPane_button" />
          <ExploreOutlinedIcon className="header__buttonsPane_button" />
          <FavoriteBorderRoundedIcon className="header__buttonsPane_button" />
          <div className="roundContainer header__buttonsPane_button">
            <img alt="" src={authUser.profile.avatar} />
          </div>
        </div>

        {/* <div>
          <input placeholder="Search" type="text"/>
        </div>

        <div>
          <input name="caption" value={caption} onChange={(e) => setCaption(e.target.value)} />
          <input multiple name="images" onChange={onImageChange} type="file" />
          <button onClick={onCommit}>Send</button>
        </div>

        <div style={{border: '1px solid black'}}>
          <p><strong>username</strong> {authUser.username}</p>
          <p><strong>bio</strong> {authUser.profile.bio}</p>
          <h2>login</h2>
          <input value={authUsername} onChange={(e) => setAuthUsername(e.target.value)} />
          <input value={authPassword} onChange={(e) => setAuthPassword(e.target.value)} />
          <button onClick={onLogin}>login</button>
          <button onClick={() => localStorage.removeItem('token')}>Logout</button>
        </div>

        <div style={{border: '1px solid black'}}>
          <h2>registration</h2>
          <strong>username</strong><input value={regUsername} onChange={(e) => setRegUsername(e.target.value)} />
          <strong>password1</strong><input value={regPassword1} onChange={(e) => setRegPassword1(e.target.value)} />
          <strong>password2</strong><input value={regPassword2} onChange={(e) => setRegPassword2(e.target.value)} />
          <button onClick={onRegister}>register</button>
        </div>
        
        <div style={{border: '1px solid black'}}>
          <h2>update profile</h2>
          <strong>bio</strong><input value={bio} onChange={(e) => setBio(e.target.value)} />
          <strong>avatar</strong><input name="avatar" onChange={onAvatarChange} type="file" />
          <button onClick={onProfileUpdate}>update</button>        
        </div> */}
      </div>
    </div>
  )
}

export default Header