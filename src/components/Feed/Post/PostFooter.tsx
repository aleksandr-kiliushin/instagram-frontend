import React, { useState } from 'react'
import { CommentType, PostType, UserType } from '../../../types/types'
import AddCommentForm from './AddCommentForm'
import Comment from './Comment'
import PostFooterBtnBar from './PostFooterBtnBar'


const PostFooter: React.FC<Props> = ({
  addComment, caption, comments, curUserId, deleteComment, isLiked, like, ownerId, ownerUsername, postId, totalLikes
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

        <Comment
          authorId={null}        
          authorUsername={ownerUsername}
          body={caption}
          commentId={null}
          curUserId={curUserId}
          deleteComment={deleteComment}
          ownerId={null}
        />

        {!areVisibleAll &&
          <p className="post__footer__comments__viewAll" onClick={() => setAreVisibleAll(true)}>
            View all {comments.length} comments
          </p>
        }

        {resultComments.map(comment => (
          <Comment
            authorId={comment.author.id}
            authorUsername={comment.author.username}
            body={comment.body}
            commentId={comment.id}
            curUserId={curUserId}
            deleteComment={deleteComment}
            key={comment.id}
            ownerId={ownerId}
          />
        ))}

      </div>


      {/* <div className="post__footer__datetime">5 hours ago</div> */}


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
  curUserId: UserType['id']
  deleteComment: (id: CommentType['id']) => void
  isLiked: PostType['is_liked']
  like: (id: PostType['id']) => void
  ownerId: UserType['id']
  ownerUsername: UserType['username']
  postId: PostType['id']
  totalLikes: PostType['total_likes']
}