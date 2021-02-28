import React, { useState } from 'react'
import { PostType } from '../../../types/types'
import PostFooter from './PostFooter'

interface Props {
  images: PostType['images']
  id: PostType['id']
  is_liked: PostType['is_liked']
  total_likes: PostType['total_likes']
  like: (postId: number) => void
}

const PostCarousel: React.FC<Props> = ({images, total_likes, like, id, is_liked}) => {
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
      <PostFooter total_likes={total_likes} like={like} postId={id} is_liked={is_liked} />
    </div>
  )
}

export default PostCarousel
