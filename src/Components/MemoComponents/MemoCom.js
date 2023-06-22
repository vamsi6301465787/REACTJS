import React from 'react'

function MemoCom({name}) {
    console.log('Memo Component Rendering..')
  return (
    <div>MemoComponent----{name}</div>
  )
}

export default React.memo(MemoCom)