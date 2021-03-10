import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { follow, reqAndSetUsers } from '../../redux/actions'
import { RootState } from '../../redux/store'
import Header from '../Header/Header'
import { UserType } from '../../types/types'
import User from './User'
import { CircularProgress } from '@material-ui/core'


const Users: React.FC<Props> = ({curUserId, follow, followingInProgress, reqAndSetUsers, users}) => {


  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {
    if (users.length === 0) {
      reqAndSetUsers()
    } else {
      setIsLoading(false)
    }
  }, [reqAndSetUsers, users])


  return (
    <div>
      <Header />
      <div className="content">

        {users.map(user => (
          <User
            curUserId={curUserId}
            follow={follow}
            followingInProgress={followingInProgress}
            key={user.id}
            user={user}
          />
        ))}

        {isLoading &&
          <div className="content__preloader">
            { <CircularProgress color="inherit"/>}
          </div>
        }
        
      </div>
    </div>
  )
}

const mapStateToProps = (state: RootState): MapStateProps => ({
  curUserId: state.user.curUser.id,
  followingInProgress: state.user.followingInProgress,
  users: state.user.users,
})
// const {} = {...actions}
const mapDispatchToProps: MapDispatchProps = {
  follow,
  reqAndSetUsers,
}


export default connect
  <MapStateProps, MapDispatchProps, {}, RootState>
  (mapStateToProps, mapDispatchToProps)(Users)




// types
type MapStateProps = {
  curUserId: UserType['id']
  followingInProgress: UserType['id'][]
  users: UserType[]
}
type MapDispatchProps = {
  follow: (id: UserType['id']) => void
  reqAndSetUsers: () => void
}
type Props = MapStateProps & MapDispatchProps