// import Avatar from '@material-ui/core/Avatar'
import React from 'react'
import { User } from '../../../types/types'
import PostModal from '../../Common/PostModal'
import './Post.css'
import '../../../App.css'

interface PropsType {
  owner: User
  postId: number
  deletePost: (postId: number) => void
  follow: (followed_user_id: number) => void
}

const PostHeader: React.FC<PropsType> = ({owner, postId, deletePost, follow}) => {

  const onFollow = () => {
    follow(owner.id)
  }

  return (
    <div className="post__header">
      <div className="roundContainer post__header__avatarContainer">
        <img alt="" src={(owner.id === 11 || owner.id === 12) ? owner.profile.avatar : ""}/>
      </div>
      <div className="post__header__username">
        {owner.username}
      </div>
      <PostModal postId={postId} deletePost={deletePost} />
    </div>
  )
}

export default PostHeader