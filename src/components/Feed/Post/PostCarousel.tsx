import React, { useState } from 'react'
import { PostType } from '../../../types/types'


const PostCarousel: React.FC<Props> = ({images, isLiked, like, postId}) => {

  const [imageIndex, setImageIndex] = useState(0)
  const onPrevImage = () => setImageIndex(prevIndex => prevIndex - 1)
  const onNextImage = () => setImageIndex(prevIndex => prevIndex + 1)


  const onLike = () => {
    if (!isLiked) like(postId)
  }


  return (
    <div className="post__imageContainer" onDoubleClick={onLike}>
      <img alt={images[imageIndex]} src={images[imageIndex]} />
      {
        imageIndex !== 0 &&
        <button className="post__imageChevron post__imageChevronLeft" onClick={onPrevImage}>
          <div></div>
        </button>
      }
      {
        imageIndex !== images.length - 1 &&
        <button className="post__imageChevron post__imageChevronRight" onClick={onNextImage}>
          <div></div>
        </button>
      }
    </div>
  )
}

export default PostCarousel



interface Props {
  images: PostType['images']
  isLiked: PostType['is_liked']
  like: (id: PostType['id']) => void
  postId: PostType['id']
}