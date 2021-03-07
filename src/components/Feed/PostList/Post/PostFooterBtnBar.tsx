import React from 'react'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import FavoriteIcon from '@material-ui/icons/Favorite'
import { PostType } from '../../../../types/types'


const PostFooterBtnBar: React.FC<Props> = ({isLiked, like, postId}) => {

  return (
    <section className="post__footer__btnBar">
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
  )
}

export default PostFooterBtnBar




// types
interface Props {
  isLiked: PostType['is_liked']
  like: (id: PostType['id']) => void
  postId: PostType['id']
}