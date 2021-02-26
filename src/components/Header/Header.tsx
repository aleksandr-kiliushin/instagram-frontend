import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core'

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

interface PropsType {
  addPost: (caption: string, image: File) => void
}

const Header: React.FC<PropsType> = ({addPost}) => {
  const s = useStyles()

  const [caption, setCaption] = useState('')
  const [image, setImage] = useState<File>()

  const onImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const image = e.target.files
    if (!image) return
    setImage(image[0])
  }

  const onCommit = () => {
    if (!image) return
    addPost(caption, image)
  }

  return (
    <div>
      <div className={s.header}>
        <img
          className={s.image}
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="instagramLogo"
        />
        <div>
          <input type="text" name="caption" value={caption} onChange={(e) => setCaption(e.target.value)} />
          <input type="file" name="files" onChange={onImageChange} />
          <button onClick={onCommit}>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Header