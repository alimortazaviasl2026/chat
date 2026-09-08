import React from 'react'
import {BeatLoader, BounceLoader, FadeLoader} from 'react-spinners'

function Message({id , text ,sending , onDel}) {
  return (
    <div className='mess border w-100 py-3 px-2 my-2 rounded-1  bg-success-subtle position-relative'>
         <p className='fw-light d-flex justify-content-between align-items-center' style={{fontSize:'15px'}}>{text}{' '}{sending ? <span className='d-inline-block'><FadeLoader color='orange' width={10} height={10} /></span> : null}</p>
        <button className='  btn position-absolute text-danger border-0 fw-bolder' onClick={()=>onDel(id)} style={{top:'-20px' , left:'0'}}>X</button>
    </div>
  )
}

export default Message
