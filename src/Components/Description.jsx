
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { todoAction } from './Store/ToDoStore'

const Description = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {id} = useParams()
  console.log(id)
  const tasks = useSelector((state)=>state.tasks)
  const selectedTask = tasks.find((task)=> id == task.id) 

  const deleteHandler = (id)=>{
    dispatch(todoAction.delete(id))
    navigate('/')
  }
  
  return (
    <div>
      {
        <section className='w-[800px]'>
          <h2 className='text-[50px]'>{selectedTask.title}</h2>
          <p className='my-10'>
            <span className='font-bold'>Description : </span>
            {selectedTask.des ? selectedTask.des : 'No description to show'}
          </p>

          <div className='flex gap-2'>
          <button className='bg-[#a8ba538c] w-[150px] h-[30px] border-none hover:bg-[#a8ba53] transition' onClick={()=>deleteHandler(selectedTask.id)}>Delete</button>
          <NavLink to={`${id}`} className='bg-[#a8ba538c] w-[150px] h-[30px] border-none hover:bg-[#a8ba53] transition flex justify-center items-center'>Edit</NavLink>
          </div>
        </section>
      }
    </div>
  )
}

export default Description
