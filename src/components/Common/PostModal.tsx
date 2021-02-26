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
      display: 'flex',
      flexDirection: 'column',
    },
  }),
)

interface PropsType {
  postId: number
  deletePost: (postId: number) => void
}

const PostModal: React.FC<PropsType> = ({postId, deletePost}) => {
  const s = useStyles()  
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  }
  const handleDeletePost = () => {
    deletePost(postId)
    handleClose()
  }

  const body = (
    <div className={s.paper}>
      <button disabled>Report</button>
      <button onClick={handleDeletePost}>Delete</button>
      <button disabled>Unfollow</button>
      <button disabled>Go to post</button>
      <button disabled>Share to..</button>
      <button disabled>Copy link</button>
      <button disabled>Embed</button>
      <button>Cancel</button>
    </div>
  )

  return (
    <div>
      <MoreHorizIcon onClick={handleOpen} />
      <Modal open={open} onClose={handleClose}>
        {body}
      </Modal>
    </div>
  )
}

export default PostModal