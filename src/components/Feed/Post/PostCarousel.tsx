import React, { useState } from 'react'
import { PostType } from '../../../types/types'

interface Props {
  images: PostType['images']
}

const PostCarousel: React.FC<Props> = ({images}) => {
  const [imageIndex, setImageIndex] = useState(0)

  const onPrevImage = () => {
    if (imageIndex !== 0) {
      setImageIndex(prevIndex => prevIndex - 1)
    }
  }

  const onNextImage = () => {
    if (imageIndex !== images.length - 1) {
      setImageIndex(prevIndex => prevIndex + 1)
    }
  }

  return (
    <div>
      <button onClick={onPrevImage}>prev</button>
      <button onClick={onNextImage}>next</button>
      <img alt={images[imageIndex]} className="post__image" src={images[imageIndex]} />
    </div>
  )
}

export default PostCarousel
