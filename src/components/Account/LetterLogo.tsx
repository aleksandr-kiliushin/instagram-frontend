import React from 'react'
import { useHistory } from 'react-router-dom'


const LetterLogo: React.FC<Props> = () => {

  const history = useHistory()

  return (
    <h1 className="acc__logo" onClick={() => history.push('/')}>
      Instagram
    </h1>
  )
}

export default LetterLogo




// types
interface Props {}