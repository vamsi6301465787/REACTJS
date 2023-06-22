import React from 'react'
import './CssStyling1.css'

function CssStyling(props) {
  const className=props.primary? 'primary' : ''
  return (
    <div class={`${className} font1`}>CssStyling</div>
  )
}

export default CssStyling