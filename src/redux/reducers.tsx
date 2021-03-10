import { AppState, FeedState, UserState } from './../types/types'
import { Actions } from './actions'
import { initAppState, initFeedState, initUserState } from './initStates'


export function appReducer(state: AppState = initAppState, action: Actions): AppState {

  switch (action.type) {

    case 'app/SET_ALERT': {
      return {...state, alert: action.alert}
    }

    default:
      return state
  }
}



export function feedReducer(state: FeedState = initFeedState, action: Actions): FeedState {

  switch (action.type) {

    case 'feed/ADD_COMMENT': {
      return {
        ...state,
        posts: state.posts.map(post => post.id !== action.postId
          ? post
          : {...post, comments: [...post.comments, action.comment]})
      }
    }

    case 'feed/ADD_POST': {
      return {
        ...state,
        posts: [action.post, ...state.posts]
      }
    }

    case 'feed/DEL_COMMENT': {
      return{
        ...state,
        posts: state.posts.map(post => post.id !== action.postId
          ? post
          : {...post, comments: post.comments.filter(comment => comment.id !== action.commentId)})
      }
    }

    case 'feed/DEL_POST': {
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.id)
      }
    }

    case 'feed/RESET_FEED_STATE': {
      return {...initFeedState}
    }

    case 'feed/SET_ARE_POSTS_OVER': {
      return {...state, arePostsOver: action.are}
    }

    case 'feed/SET_IS_NO_POSTS_RECIEVED': {
      return {...state, isNoPostsRecieved: action.is}
    }

    case 'feed/SET_IS_WAITING_FOR_NEW_POSTS': {
      return {...state, isWaitingForNewPosts: action.is}
    }

    case 'feed/SET_LIKE': {
      return {
        ...state,
        posts: state.posts.map(post => post.id !== action.id ? post : {
          ...post,
          is_liked: !post.is_liked,
          total_likes: post.is_liked ? post.total_likes - 1 : post.total_likes + 1,
        })
      }
    }

    case 'feed/SET_POSTS': {
      return {
        ...state,
        posts: [...state.posts, ...action.posts],
      }
    }

    default:
      return state
  }
}



export function userReducer(state: UserState = initUserState, action: Actions): UserState {

  switch (action.type) {

    case 'user/RESET_USER_STATE': {
      return {...initUserState}
    }

    case 'user/SET_AVATAR': {
      return {
        ...state,
        curUser: {...state.curUser, avatar: action.url}
      }
    }

    case 'user/SET_FOLLOWING_IN_PROGRESS': {
      return {
        ...state,
        followingInProgress: state.followingInProgress.includes(action.id)
          ? state.followingInProgress.filter(id => id !== action.id)
          : [...state.followingInProgress, action.id]
      }
    }

    case 'user/SET_IS_FOLLOWED' : {
      return {
        ...state,
        users: state.users.map(user => user.id !== action.id ? user : {...user, is_followed: !user.is_followed})
      }
    }

    case 'user/SET_IS_INITIALIZED': {
      return {...state, isInitialized: action.is}
    }

    case 'user/SET_NOTICE': {
      return {
        ...state,
        notice: action.notice ? {...action.notice} : null
      }
    }

    case 'user/SET_REDIRECT_TO': {
      return {...state, redirectTo: action.to}
    }

    case 'user/SET_USER_DATA': {
      return {...state, curUser: {...action}}
    }

    case 'user/SET_USERS': {
      return {...state, users: [...action.users]}
    }

    default:
      return state
  }
}