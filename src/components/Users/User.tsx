import React from 'react'
import { UserType } from '../../types/types'
import { Button } from '@material-ui/core'
import { loginRequired } from '../../utils/utils'


const User: React.FC<Props> = ({curUserId, follow, followingInProgress, user}) => {


  const onFollow = () => {
    loginRequired(() => follow(user.id))
  }


  let followBtn
  if (user.id === curUserId) {
    followBtn = null
  } else if (user.is_followed) {
    followBtn = (
      <Button color="secondary" disabled={followingInProgress.includes(user.id)} onClick={onFollow}>Unfollow</Button>
    )
  } else {
    followBtn = (
      <Button color="primary" disabled={followingInProgress.includes(user.id)} onClick={onFollow} >Follow</Button>
    )
  }

  return (
    <div>
      <div className="post__header" key={user.id}>
        <div className="roundContainer post__header__avatarContainer">
          <img alt="" src={user.avatar}/>
        </div>
        <div className="post__header__username">
          {user.username}
        </div>
        {followBtn}
      </div>
    </div>
  )
}

export default User




// types
type Props = {
  curUserId: UserType['id']
  follow: (id: UserType['id']) => void
  followingInProgress: UserType['id'][]
  user: UserType
}