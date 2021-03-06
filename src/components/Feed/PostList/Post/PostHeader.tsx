import React from 'react'
import { User } from '../../../../types/types'
import CommonModal from '../../../Common/CommonModal'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'


const PostHeader: React.FC<PropsType> = ({owner, postId}) => {

  const options: {text: string, cb: () => void}[] = [
    {text: 'Unfollow', cb: () => alert('Unfollowed.')},
    {text: 'Delete post', cb: () => alert('Post has been deleted.')},
  ]
  

  return (
    <div className="post__header">
      <div className="roundContainer post__header__avatarContainer">
        <img alt="" src={owner.avatar}/>
      </div>
      <div className="post__header__username">
        {owner.username}
      </div>
      <CommonModal appearance={<MoreHorizIcon />} options={options} />
    </div>
  )
}

export default PostHeader




interface PropsType {
  owner: User
  postId: number
}