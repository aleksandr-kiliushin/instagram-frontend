import React from 'react'
import { Notice } from '../../types/types'

interface Props {
  notice: Notice
}

const AccNotice: React.FC<Props> = ({notice}) => {
  return (
    <div className={`acc_notice ${notice?.kind}`}>
      {notice ? <p>{notice.body}</p> : null}
    </div>
  )
}

export default AccNotice
