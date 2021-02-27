import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  header: {
    backgroundColor: 'white',
    borderBottom: '1px solid lightgray',
    height: 54,
    objectFit: 'contain',
    display: 'flex',
  },
  image: {
    padding: 12.5,
  }
})

interface Props {
  username: string
  addPost: (caption: string, images: FileList) => void
  tempAuthName: (authUsername: string, password: string) => void
  testHello: () => void
  register: (username: string, password: string) => void
}

const Header: React.FC<Props> = ({username, addPost, tempAuthName, testHello, register}) => {
  const s = useStyles()

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


  // new
  const [authUsername, setAuthUsername] = useState('')
  const [authPassword, setAuthPassword] = useState('')
  const onLogin = () => {
    tempAuthName(authUsername, authPassword)
  }

  const [regUsername, setRegUsername] = useState('')
  const [regPassword1, setRegPassword1] = useState('')
  const [regPassword2, setRegPassword2] = useState('')
  const onRegister = () => {
    if (regPassword1 === regPassword2) {
      register(regUsername, regPassword1)
    }
  }
  //end new



  return (
    <div className={s.header}>
      <img
        className={s.image}
        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
        alt="instagramLogo"
      />
      <div>
        <input type="text" name="caption" value={caption} onChange={(e) => setCaption(e.target.value)} />
        <input multiple name="images" onChange={onImageChange} type="file" />
        <button onClick={onCommit}>Send</button>
      </div>
      <div><p>{username}</p></div>

      {/* new */}
      <div>
        <input value={authUsername} onChange={(e) => setAuthUsername(e.target.value)} />
        <input value={authPassword} onChange={(e) => setAuthPassword(e.target.value)} />
        <button onClick={onLogin}>login</button>
        <button onClick={() => localStorage.removeItem('token')}>Logout</button>
      </div>
      <div>
        <input value={regUsername} onChange={(e) => setRegUsername(e.target.value)} />
        <input value={regPassword1} onChange={(e) => setRegPassword1(e.target.value)} />
        <input value={regPassword2} onChange={(e) => setRegPassword2(e.target.value)} />
        <button onClick={onRegister}>register</button>
      </div>
      <button onClick={() => testHello()}>Check auth ability</button>
      {/* end new */}
    </div>
  )
}

export default Header