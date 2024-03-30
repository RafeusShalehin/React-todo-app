import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { todoAction } from './Store/ToDoStore';

const TaskList = () => {
  const tasks = useSelector((state)=>state.tasks)
  const dispatch = useDispatch()

  const deleteHandler = (id)=>{
    dispatch(todoAction.delete(id))
  }
  
  return (
    <div className=''>
      {
      tasks.length < 0 ? <h4>Please Add task to see list ...</h4> : (
        <ul className='flex flex-col gap-3'>
          {
            tasks && (tasks.map((item,idx)=>(
              	<div key={idx} className='flex justify-between items-center gap-3'>
                  <h2 className='text-[24px]'>{idx + 1}.</h2>
                  <li className='border-b rounded w-[300px] p-3 flex gap-2'>
                    <NavLink to={`${item.id}`} className='w-[100%] text-lg hover:text-[gray]'>{item.title}</NavLink>
                    <MdDelete className='cursor-pointer hover:text-rose-400 transition delete' onClick={()=>deleteHandler(item.id)}/>
                    <NavLink to={`edit/${item.id}`}><CiEdit className='cursor-pointer hover:text-green-400 transition edit'/></NavLink>
                  </li>
                </div>
              ))
            )
          }
        </ul>
      )
      }
    </div>
  )
}

export default TaskList
