import React from 'react'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import FavoriteIcon from '@material-ui/icons/Favorite'
import { PostType, UserType } from '../../../../types/types'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'


const PostFooter: React.FC<Props> = ({caption, comments, isLiked, like, ownerId, ownerUsername, postId, totalLikes}) => {

  return (
    <div className="post__footer">

      <section className="post__footer__btns">
        <span>
          <button onClick={() => like(postId)}>
            {
              isLiked
                ? <FavoriteIcon color="secondary" fontSize="large" />
                : <FavoriteBorderIcon fontSize="large" />
            }
          </button>
        </span>
      </section>

      <section className="post__footer__likes">
        {totalLikes !== 0 ? <p>{totalLikes} like{totalLikes > 1 && 's'}</p> : null}
      </section>



      <div className="post__footer__comments">


        <div className="post__footer__comments__item">

          <div className="post__footer__comments__comment">
            <span className="post__footer__comments__author">{ownerUsername}</span>&nbsp;
            <span>{caption}</span>
            <span className="post__footer__comments__more">...more</span>
          </div>

          <div>
            <MoreHorizIcon />
          </div>

        </div>



        <p className="post__footer__comments__viewAll">View all {5} comments</p>



        {
          comments.map(comment => (
            <div className="post__footer__comments__item" key={comment.id}>
              <div className="post__footer__comments__comment">
                <span className="post__footer__comments__author">{comment.author.username}</span>&nbsp;
                <span>{comment.body}</span>
                <span className="post__footer__comments__more">...more</span>
              </div>
              <div>
                <MoreHorizIcon />
              </div>
            </div>
          ))
        }
        
      </div>
    




      {/* <div className="post__footer__datetime">
        <p>5 hours ago</p>
      </div> */}

      {/* <div className="post__footer__addCommentOuter">
        <form>
          <textarea placeholder="Add a comment…" value={body} onChange={(e) => setBody(e.target.value)} />
          <button onClick={onAddComment}>Post</button>
        </form>
      </div> */}

    </div>
  )
}

export default PostFooter




// types
interface Props {
  caption: PostType['caption']
  comments: PostType['comments']
  isLiked: PostType['is_liked']
  like: (id: PostType['id']) => void
  ownerId: UserType['id']
  ownerUsername: UserType['username']
  postId: PostType['id']
  totalLikes: PostType['total_likes']
}