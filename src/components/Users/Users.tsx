import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { follow, reqAndSetUsers, unfollow } from '../../redux/user-reducer'
import { RootState } from '../../redux/store'
import Header from '../Header/Header'
import { UserType } from '../../types/types'
import User from './User'


const Users: React.FC<Props> = ({curUserId, follow, reqAndSetUsers, unfollow, users}) => {

  useEffect(() => {
    if (users.length === 0) {
      reqAndSetUsers()
    }
  }, [reqAndSetUsers, users])


  return (
    <div>
      <Header />
      <div className="content">
        {users.map(user => (
          <User curUserId={curUserId} follow={follow} key={user.id} unfollow={unfollow} user={user} />
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = (state: RootState): MapStateProps => ({
  curUserId: state.user.curUser.id,
  users: state.user.users,
})
// const {} = {...actions}
const mapDispatchToProps: MapDispatchProps = {
  follow,
  reqAndSetUsers,
  unfollow,
}


export default connect
  <MapStateProps, MapDispatchProps, {}, RootState>
  (mapStateToProps, mapDispatchToProps)(Users)




// types

type MapStateProps = {
  curUserId: UserType['id']
  users: UserType[]
}
type MapDispatchProps = {
  follow: (id: UserType['id']) => void
  reqAndSetUsers: () => void
  unfollow: (id: UserType['id']) => void
}
type Props = MapStateProps & MapDispatchProps