import React, { useRef } from 'react'

function InputText({onAddMess , onAddOptimistic }) {
   

  const inpuRef = useRef(null)

   const handleAdd = async () => {   
       onAddOptimistic(inpuRef.current.value)
    try {
        await onAddMess(inpuRef.current.value)
    }
    catch (err) {
      alert(err)
    }
   }


  return (
    <form action={handleAdd} >
       <div className='position-relative'>
        <input type="text" ref={inpuRef}   className='form-control' placeholder='پیغام خود را وارد نمایید !' />
         <button  type='submit' className='btn btn-info bg-gradient btn-sm position-absolute ' style={{top:'4px' , left:'4px'}}>
             ایجاد +
         </button>
    </div>
    </form>
  )
}

export default InputText
