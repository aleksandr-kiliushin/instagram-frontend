import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core'
// import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import axios from 'axios'

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

/*
const Header: React.FC<PropsType> = ({addPost}) => {
  const s = useStyles()

  const [caption, setCaption] = useState('')
  const [image, setImage] = useState<File>()

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const images = e.target.files
    if (!images) return
    setImage(images[0])
  }

  const commitPost = () => {
    if (image) {
      addPost(caption, image)
    }
  }

  return (
    <div>
      <div className={s.header}>
        <img
          className={s.image}
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="instagramLogo"
        />
        <input type="text" value={caption} onChange={(e) => setCaption(e.target.value)} />
        <input type="file" onChange={handleImageChange} />
        <AddCircleOutlineIcon onClick={commitPost} />
      </div>
    </div>
  )
}

export default Header
*/

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
    const formData = new FormData()
    formData.append('caption', caption)
    // @ts-ignore
    formData.append('image', image)
    formData.append('imageUrl', 'http://1.bp.blogspot.com/-1ztptPpWjac/VN6b6LpeFNI/AAAAAAACwFk/X33qntF2wh0/s1600/delete-300x300.jpg')
    // @ts-ignore
    formData.append('ownerId', 4)
    
    axios.post('http://localhost:8000/api/posts/',
      formData,
      {headers: {'content-type': 'multipart/form-data'}}
    )
    
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