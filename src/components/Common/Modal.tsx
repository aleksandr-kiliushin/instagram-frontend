import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      top: '50%',
      left: '50%',
      transform: `translate(-50%, -50%)`,
    },
  }),
)

interface PropsType {
  commentId: number
  deleteComment: (commentId: number) => void
}

const SimpleModal: React.FC<PropsType> = ({commentId, deleteComment}) => {
  const s = useStyles()  
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  }
  const handleDeleteComment = () => {
    deleteComment(commentId)
    handleClose()
  }

  const body = (
    <div className={s.paper}>
      <button>Report</button>
      <button onClick={handleDeleteComment}>Delete</button>
      <button onClick={handleClose}>Cancel</button>
    </div>
  );

  return (
    <div>
      <MoreHorizIcon onClick={handleOpen} />
      <Modal open={open} onClose={handleClose}>
        {body}
      </Modal>
    </div>
  )
}

export default SimpleModal