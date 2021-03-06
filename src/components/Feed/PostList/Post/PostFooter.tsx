// import React, { useState } from 'react'
// import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
// import SendOutlinedIcon from '@material-ui/icons/SendOutlined'
// import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined'
// import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined'
// import { PostType } from '../../../types/types'
// import FavoriteIcon from '@material-ui/icons/Favorite'
// // import './Post.scss'
// // import CommentModal from '../../Common/CommentModal'
// import MoreHorizIcon from '@material-ui/icons/MoreHoriz'

// interface Props {
//   total_likes: PostType['total_likes']
//   postId: PostType['id']
//   is_liked: PostType['is_liked']
//   caption: PostType['caption']
//   comments: PostType['comments']
//   owner: PostType['owner']
//   like: (postId: number) => void
//   deleteComment: (commentId: number) => void
//   addComment: (body: string, postId: number) => void
// }

// const PostFooter: React.FC<Props> = ({total_likes, like, is_liked, caption, comments, owner, deleteComment, postId,
//   addComment}) => {
//   const [isLiked, setIsLiked] = useState(is_liked)

//   const onLike = () => {
//     if (false) {
//       setIsLiked(prevIsLiked => !prevIsLiked)
//     }
//     like(postId)
//   }
  

//   const [body, setBody] = useState('')

//   const onAddComment = () => {
//     addComment(body, postId)
//     setBody('')
//   }


//   return (
//     <div className="post__footer">

//       <section className="post__footer__btns">
//         <span>
//           <button>
//             {isLiked ? <FavoriteIcon onClick={onLike} color="secondary" /> : <FavoriteBorderIcon onClick={onLike} />}
//           </button>
//         </span>
//         <span>
//           <button>
//             <ModeCommentOutlinedIcon />
//           </button>
//         </span>
//         <span>
//           <button>
//             <SendOutlinedIcon />            
//           </button>
//         </span>
//         <span className="post__footer__btns__bookmark">
//           <button>
//             <BookmarkBorderOutlinedIcon />            
//           </button>
//         </span>
//       </section>

//       <section className="post__footer__likes">
//         <p>{total_likes} likes</p>
//       </section>






//       <div className="post__footer__comments">

//         <div className="post__footer__comments__caption">
//           <div className="post__footer__comments__entireComment">

//             <span className="post__footer__comments__commentAuthor"><p>{owner.username}</p></span>&nbsp;

//             <span>
//               <span className="post__footer__comments__commentBody">{caption}</span>
//               <span className="post__footer__comments__commentMore">...<button>more</button></span>
//             </span>

//           </div>
//           <div>
//             <MoreHorizIcon />
//           </div>
//         </div>

//         <button className="post__footer__comments__viewAllCommentsBtn">
//           <p>View all <span>5</span> comments</p>
//         </button>

//         {
//           comments.map((comment) => (
//             <div className="post__footer__comments__caption" key={comment.id}>
//               <div className="post__footer__comments__entireComment">
    
//                 <span className="post__footer__comments__commentAuthor"><p>{comment.author.username}</p></span>&nbsp;
    
//                 <span>
//                   <span className="post__footer__comments__commentBody">{comment.body}</span>
//                   <span className="post__footer__comments__commentMore">...<button>more</button></span>
//                 </span>
    
//               </div>
//               {/* <div>
//                 <CommentModal commentId={comment.id} deleteComment={deleteComment}/>
//               </div> */}
//             </div>
//           ))
//         }

//       </div>
    




//       <div className="post__footer__datetime">
//         <p>5 hours ago</p>
//       </div>

//       <div className="post__footer__addCommentOuter">
//         <form>
//           <textarea placeholder="Add a comment…" value={body} onChange={(e) => setBody(e.target.value)} />
//           <button onClick={onAddComment}>Post</button>
//         </form>
//       </div>

//     </div>
//   )
// }

// export default PostFooter

const x = 432
export default x