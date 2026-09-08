import React from 'react'

function ClearBtn({onClearAll}) {
  return (
    <div>
       <button className='btn btn-sm btn-primary bg-gradient w-100' onClick={onClearAll}>
         پاکسازی لیست
       </button>
    </div>
  )
}

export default ClearBtn
