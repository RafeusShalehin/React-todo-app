import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import RootLayout from './Components/Layouts/RootLayout'
import AddTask from './Components/AddTask'
import Description from './Components/Description'
import Edit from './Components/Edit'

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
        <Route path='add' element={<AddTask/>}/>
        <Route path='/edit/:id' element={<Edit/>} />
        <Route path='/:id'>
          <Route index  element={<Description/>} />
          <Route path=':id' element={<Edit/>} />
        </Route>
      </Route>
    )
  )
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
