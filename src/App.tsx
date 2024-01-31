import { RouterProvider, createRouter } from '@tanstack/react-router'

//importing route tree
import { routeTree } from './routeTree.gen.ts'


const router= createRouter({routeTree})


function App() {
  

  return (
    <>
       <RouterProvider router={router}/>
    </>
  )
}

export default App
