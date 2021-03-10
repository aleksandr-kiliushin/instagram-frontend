import React, { useEffect, useState } from 'react'
import { PostType } from '../../../types/types'
import { loginRequired, url } from '../../../utils/utils'


const PostCarousel: React.FC<Props> = ({images, isLiked, like, postId}) => {

  const [imageIndex, setImageIndex] = useState(0)
  const onPrevImage = () => setImageIndex(prevIndex => prevIndex - 1)
  const onNextImage = () => setImageIndex(prevIndex => prevIndex + 1)


  const [isCarouselLike, setIsCarouselLike] = useState(false)
  useEffect(() => {
    if (isCarouselLike) {
      setTimeout(() => {
        setIsCarouselLike(false)
      }, 2000);
    }
  }, [isCarouselLike, setIsCarouselLike])
  
  

  const onLike = () => loginRequired(() => {
    setIsCarouselLike(true)
    if (!isLiked) like(postId)
  })


  return (
    <div className="post__imageContainer" onDoubleClick={onLike}>
      <img alt={images[imageIndex]} src={images[imageIndex]} />

      {imageIndex !== 0 &&
        <button className="post__imageChevron post__imageChevronLeft" onClick={onPrevImage}>
          <div></div>
        </button>
      }
      {imageIndex !== images.length - 1 &&
        <button className="post__imageChevron post__imageChevronRight" onClick={onNextImage}>
          <div></div>
        </button>
      }

      {isCarouselLike &&
        <div className="post__carouselLike">
          <img src={`${url}media/static/like_heart.png`} alt=""/>
        </div>
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