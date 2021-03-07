import React, { useState } from 'react'
import Modal from '@material-ui/core/Modal'
import AddAPhotoOutlinedIcon from '@material-ui/icons/AddAPhotoOutlined'


const AddPostModal: React.FC<Props> = ({addPost}) => {
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)


  const [caption, setCaption] = useState('')
  const [images, setImages] = useState<FileList>()

  const onImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputedImages = e.target.files
    if (inputedImages) {
      setImages(inputedImages)
    }
  }

  const onCommit = () => {
    if (images) {
      addPost(caption, images)
      handleClose()
    }
  }


  return (
    <div>
      <div onClick={handleOpen}>
        <AddAPhotoOutlinedIcon />
      </div>
      <Modal open={open} onClose={handleClose}>
        <div className="modalOuter">
          <div className="modal">

            <div>
              <textarea
                className="modal__textarea"
                onChange={(e) => setCaption(e.target.value)}
                placeholder="Post caption"
                rows={5}
                value={caption}
              />
            </div>

            <button>
              <label htmlFor="imageInput">
                <div className="pointer">Select images</div>
                <input id="imageInput" multiple onChange={onImageChange} type="file" />
              </label>
            </button>

            <button onClick={onCommit}>Publish</button>
            <button onClick={handleClose} className="err">Cancel</button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default AddPostModal



// types

interface Props {
  addPost: (caption: string, images: FileList) => void
}