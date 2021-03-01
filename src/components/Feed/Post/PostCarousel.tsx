import React, { useState } from 'react'
import { PostType } from '../../../types/types'

interface Props {
  images: PostType['images']
}

const PostCarousel: React.FC<Props> = ({images}) => {
  const [imageIndex, setImageIndex] = useState(0)

  const onPrevImage = () => {
    setImageIndex(prevIndex => prevIndex - 1)
  }

  const onNextImage = () => {
    setImageIndex(prevIndex => prevIndex + 1)
  }

  return (
    <div className="post__imageContainer">
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
