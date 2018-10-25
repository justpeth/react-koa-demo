import React from 'react'

function Notice(props) {
  const { type, content } = props
  return (
    <div className={`toast-notice ${type}`}>
      <span>{content}</span>
    </div>
  )
}
export default Notice