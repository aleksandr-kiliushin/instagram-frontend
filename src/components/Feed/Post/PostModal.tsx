import React from 'react'
import Modal from '@material-ui/core/Modal'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import { UserType, PostType } from '../../../types/types';
import loginRequired from '../../../utils/utils';


const PostModal: React.FC<Props> = ({curUserId, deletePost, follow, isFollowed, ownerId, postId}) => {
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)


  const onFollow = () => {
    loginRequired(() => follow(ownerId))
    handleClose()
  }
  let followBtn
  if (ownerId === curUserId) {
    followBtn = null
  } else if (isFollowed) {
    followBtn = <button onClick={onFollow} style={{color: 'red'}}>Unfollow</button>
  } else {
    followBtn = <button onClick={onFollow}>Follow</button>
  }


  const onDelete = () => {
    deletePost(postId)
    handleClose()
  }
  let deleteBtn = null
  if (curUserId === ownerId || curUserId === 1) {
    deleteBtn = <button onClick={onDelete} style={{color: 'red'}}>Delete post</button>
  }


  return (
    <div>
      <MoreHorizIcon onClick={handleOpen} />
      <Modal open={open} onClose={handleClose}>
        <div className="modalOuter">
          <div className="modal">
            {followBtn}
            {deleteBtn}
            <button onClick={handleClose}>Cancel</button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default PostModal




// types
interface Props {
  curUserId: UserType['id']
  deletePost: (id: PostType['id']) => void
  follow: (id: UserType['id']) => void
  isFollowed: UserType['is_followed']
  ownerId: UserType['id']
  postId: PostType['id']
}