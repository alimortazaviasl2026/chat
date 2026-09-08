import React, { useOptimistic, useRef, useState } from 'react'
import './App.css'
import { Card } from 'react-bootstrap'
import InputText from './components/InputText'
import ClearBtn from './components/ClearBtn'
import Message from './components/Message'
// const deliverMessage = async (message) => {
//   await new Promise((resolve)=> setTimeout(resolve,2000))
//   return {id:crypto.randomUUID(),message:message}



// }


//  const handleMessage = (preMessages , newMessages) => {
//      const text = {id: crypto.randomUUID() , text : newMessages , sending:true}
//     return  text.text  ?   [...preMessages , text] : preMessages
//  }


const handleOptimistic = (preValue , nextValue ) => {
    const newMessage = {
       id : preValue.length + 1 ,
       text:nextValue
    }
    
  return  [...preValue , newMessage]
}

function App() {

const [messages , setMessages] = useState([])
  const [optimisticMessagesState , addOptimisticMessage] =  useOptimistic(messages , handleOptimistic)
 

const handleDeliverMessage =  (mess) =>  handleGenerateMess(mess)
 


const handleGenerateMess =  async (text) => {
   
   await new Promise(res => setTimeout(res , 3000))

   if(Math.random() < .5){
      throw new Error('failed in sending message');
   }

   const newMessage = {
      id: messages.length + 1 , 
       text ,
   }

   

   setMessages([...messages , newMessage])
    

   
}

const handleClearAll = () => setMessages([])


const handleRemoveMess = (id) => {
  const filterdMess = messages.filter(mess => mess.id !== id)
  setMessages(filterdMess)
}


  return (
      <>
      <Card className='mx-auto my-5  p-3' style={{width:'20rem'}}>
           <div className='my-2 fw-bold text-center'>
             <h5 className='text-success '>پیام سبز </h5>
             <p style={{fontSize:'13px'}} className=' text-muted'>سیستم تنظیم و نمایش پیام های انگیزشی روزانه</p>
           </div>
           <div>
              <InputText   onAddOptimistic={addOptimisticMessage} onAddMess = {handleDeliverMessage} />
           </div>
              <div className='text-end my-3'>پیغام ها : </div>
           <div  className='messages '>
          {
             optimisticMessagesState.length ? optimisticMessagesState.map(mess => <Message onDel ={handleRemoveMess} key={mess.id} {...mess}/>) :
             <span className='badge bg-danger bg-gradient w-100 p-2 my-2'>پیامی ارسال نشده است </span>

          }
           </div>

           <div>
             <ClearBtn onClearAll = {handleClearAll}/>
           </div>
      </Card>
     </>
  )
}

export default App
 //  const [messages , setMessages] = useState('')

  //   const [optimisticMessages , addOptimisticMessage ] = useOptimistic(messages , handleMessage)

  //  const addMessage = async (mess) => {
  //   const text = await  generateText(mess)
  //   setMessages(text.text ? [...messages , text] : messages)
  //  }
     

  //  const generateText = async (mess) => {
  //    await new Promise(resolve => setTimeout(resolve , 2000))

  //      const random = Math.random()
  //      console.log(random);
       
  //      if(random < 0.3){
  //       throw new Error('sending message failed')
  //      }

  //    return  {
  //        id: messages.length + 1 , text:mess , sending:false
  //    }
  //  }

  //   const clear = () => setMessages([])

  // const delMess =( messId) => {
  //  const updateMessages = messages.filter(mess => mess.id !== messId)
  //   setMessages(updateMessages)
  // }