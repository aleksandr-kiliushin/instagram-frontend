import React from 'react'
import { PostType, UserType } from '../../../../types/types'
import PostModal from './PostModal'


const PostHeader: React.FC<PropsType> = ({curUserId, deletePost, follow, owner, postId}) => {
  return (
    <div className="post__header">
      <div className="roundContainer post__header__avatarContainer">
        <img alt="" src={owner.avatar}/>
      </div>
      <div className="post__header__username">
        {owner.username}
      </div>
      <PostModal
        curUserId={curUserId}
        deletePost={deletePost}
        follow={follow}
        isFollowed={owner.is_followed}
        ownerId={owner.id}
        postId={postId}
      />
    </div>
  )
}

export default PostHeader




interface PropsType {
  curUserId: UserType['id']
  deletePost: (id: PostType['id']) => void
  follow: (id: UserType['id']) => void
  owner: UserType
  postId: PostType['id']
}