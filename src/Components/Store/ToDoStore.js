import { configureStore, createSlice } from "@reduxjs/toolkit"

const initialState = {
    tasks: [
        {id:1, title:'aaa', des:'Lorem ipsum dolor sit amet consectetur'},
        {id:2, title:'bbb', des:'amet consectetur adipisicing elit. Porro at non sunt tenetur ullam'},
        {id:3, title:'ccc', des:'adipisicing elit. Porro at non sunt tenetur ullam nemo laudantium commodi sit amet consectetur'},
        {id:4, title:'ddd', des:'commodi sit amet consectetur adipisicing elit'},
    ]
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        add(state, action){
            state.tasks = [...state.tasks, action.payload]
        },
        edit(state,action){
            const task = action.payload
            let index = null
            state.tasks.forEach((item,idx)=>{
                if(item.id == task.id){
                    index = idx
                }
            })

            state.tasks.splice(index,1,action.payload)
        },
        delete(state,action){
            let index = null
            state.tasks.forEach((item,idx)=>{
                if(item.id == action.payload){
                    index = idx
                }
            })

            state.tasks.splice(index,1)
        }
    }
})

const store = configureStore({
    reducer: todoSlice.reducer
})

export const todoAction = todoSlice.actions
export default store