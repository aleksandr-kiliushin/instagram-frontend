import React, { useState } from 'react'
import { CommentType, PostType, UserType } from '../../../../types/types'
import AddCommentForm from './AddCommentForm'
import Comment from './Comment'
import PostFooterBtnBar from './PostFooterBtnBar'


const PostFooter: React.FC<Props> = ({
  addComment, caption, comments, deleteComment, isLiked, like, ownerId, ownerUsername, postId, totalLikes
}) => {


  const [areVisibleAll, setAreVisibleAll] = useState(comments.length <= 2)

  const resultComments = areVisibleAll ? comments : [comments[0], comments[1]]


  return (
    <div className="post__footer">


      <PostFooterBtnBar isLiked={isLiked} like={like} postId={postId} />


      <section className="post__footer__likes">
        {totalLikes !== 0 ? <p>{totalLikes} like{totalLikes > 1 && 's'}</p> : null}
      </section>


      <div className="post__footer__comments">

        <Comment authorUsername={ownerUsername} body={caption} commentId={null} deleteComment={deleteComment} />

        {!areVisibleAll &&
          <p className="post__footer__comments__viewAll" onClick={() => setAreVisibleAll(true)}>
            View all {comments.length} comments
          </p>
        }

        {resultComments.map(comment => (
          <Comment
            authorUsername={comment.author.username}
            body={comment.body}
            commentId={comment.id}
            deleteComment={deleteComment}
            key={comment.id}
          />
        ))}

      </div>


      <div className="post__footer__datetime">5 hours ago</div>


      <AddCommentForm addComment={addComment} postId={postId} />

    </div>
  )
}

export default PostFooter




// types
interface Props {
  addComment: (body: CommentType['body'], postId: PostType['id']) => void
  caption: PostType['caption']
  comments: CommentType[]
  deleteComment: (id: CommentType['id']) => void
  isLiked: PostType['is_liked']
  like: (id: PostType['id']) => void
  ownerId: UserType['id']
  ownerUsername: UserType['username']
  postId: PostType['id']
  totalLikes: PostType['total_likes']
}