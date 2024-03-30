import {useEffect, useRef, useState} from 'react'
import { todoAction } from './Store/ToDoStore'
import { useDispatch } from 'react-redux'
import { IoClose } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';



const AddTask = () => {

  const [title, setTitle] = useState('');
  const [des, setDes] = useState('');
  const dispatch = useDispatch();
  const addShow = useRef();
  const formShow = useRef();
  const navigate = useNavigate()
  const [blur, setBlur] = useState(false)
  const [showSubmit, setSubmit] = useState('Add')



  useEffect(()=>{

    const drop=(e)=>{
      if( formShow.current.contains(e.target) && !addShow.current.contains(e.target)){
        
      }else if(e.target.innerText == 'Add'){
      }else{
        navigate('/')
      }
    }

    
    document.addEventListener('click',drop)
    
    return ()=>{
      document.removeEventListener('click',drop)
    }
 
  },[addShow])

  const titleChangeHandler = (e)=>{
    setTitle(e.target.value)
    setBlur(false)
    setSubmit('Add')
  }

  const onBlurChange = ()=>{
    if(title.length < 3){
      setBlur(true)
    }
  }
  const formSubmitHandler = (e)=>{

    e.preventDefault()

    setSubmit('submiting...')
    if(title.length > 3){
      setTimeout(()=>{
        const date = new Date()
        dispatch(todoAction.add({title, des, id: String(date)}))
        setSubmit('compleat')
      },2000)
    }

    setTitle('')
    setDes('')
  }
  return (
    <form onSubmit={formSubmitHandler} className={`bg-[#3c3c3cd1] w-[50%] p-[5%] flex flex-col gap-5 relative`} ref={formShow}>
      <div className='absolute right-[5%] cursor-pointer z-100' ref={addShow}>
        <IoClose className='text-[30px] hover:text-rose-500 transition'/>
      </div>
        <div className='flex flex-col gap-5'>
          <label htmlFor="title">Title</label>
          <div className='flex gap-2 items-center'>
            <input className={`w-[50%] bg-[#444444] rounded-lg outline-none p-[2%] border ${blur ? 'border-rose-500' : 'border'}`} id='title' type="text" value={title} onChange={titleChangeHandler} onBlur={onBlurChange} placeholder='Atleast 3 letter required'/>
            {blur && <h4>Atleast 3 letter required</h4>}
          </div>
        </div>

        <div className='flex flex-col gap-5'>
          <label htmlFor="description">Description</label>
          <textarea className=' bg-[#444444] border rounded-lg outline-none p-[2%]' name="" id="description" cols="10" rows="10" value={des} onChange={(e)=> setDes(e.target.value) } placeholder='Not required'></textarea>
        </div>

        <button type='submit' className='bg-[#a8ba538c] w-[150px] h-[40px] self-end border-none hover:bg-[#a8ba53] transition'>{showSubmit}</button>
    </form>
  )
}

export default AddTask
