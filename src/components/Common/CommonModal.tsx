import React, { ReactNode } from 'react'
import Modal from '@material-ui/core/Modal'

interface Props {
  appearance: ReactNode
  options: {text: string, cb: () => void}[]
}

const CommonModal: React.FC<Props> = ({appearance, options}) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div>
      <div onClick={handleOpen}>
        {appearance}
      </div>
      <Modal open={open} onClose={handleClose}>
        <div className="modalOuter">
          <div className="modal">
            {options.map(option => (
              <button key={option.text} onClick={() => {option.cb(); handleClose()}} type="button">
                {option.text}
              </button>
            ))}
            <button onClick={handleClose}>Close</button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default CommonModal