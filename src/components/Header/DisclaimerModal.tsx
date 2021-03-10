import React, { useEffect, useState } from 'react'
import Modal from '@material-ui/core/Modal'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'


export default function DisclaimerModal() {
  
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const [link, setLink] = useState('')
  useEffect(() => {
    if (link) {
      window.location.assign(link)
    }
  }, [link])

  return (
    <div>
      <div onClick={handleOpen}>
        <InfoOutlinedIcon />
      </div>
      <Modal open={open} onClose={handleClose}>
        <div className="modalOuter">
          <div className="modal">
            <div className="disclaimer">
              <h3>Hello.</h3>

              <br/>
              
              <p>Thank you for you visit.</p>
              <br/>
              <p>This website is built for only training purposes and has no any relation
                to <span className="disclaimer__link" onClick={() => setLink('https://www.instagram.com/')}>Instagram</span>.</p>

              <br/>

              <p>Feel free to publish posts, leave comments and so on.</p>
              <p>To check full features, please login.</p>
              <p>Your account, posts and comments will be stored for 2 hours, and then will be deleted/</p>

              <br/>

              <p>If you have any remarks, comments or suggestions, my contacts are here:</p>
              <p>- alexander.kilyushin@gmail.com</p>
              <p>- WhatsApp: +7-985-151-60-76</p>
              <p>- <span className="disclaimer__link" onClick={() => setLink('https://github.com/oaiyui')}>Github</span></p>

              <br/>

              <p>Have a good day.</p>
            </div>
            <button onClick={handleClose}>Continue</button>
          </div>
        </div>
      </Modal>
    </div>
  )
}