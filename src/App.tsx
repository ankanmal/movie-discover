import { RouterProvider, createRouter } from '@tanstack/react-router'
import { RecoilRoot, useRecoilValue  } from 'recoil'

//importing route tree
import { routeTree } from './routeTree.gen.ts'
import { AuthState, authAtom } from './globalAtoms/authStateAtom.ts'


const router= createRouter({
  routeTree,
defaultPreload: "intent",
context: {
  auth: undefined! // this will be set after the app is wrap in recoilRoot
}})


// Register things for typesafety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
const InnerApp =()=>{
  const atomauthValue= useRecoilValue<AuthState>(authAtom)
  return <RouterProvider router={router} context={{auth:atomauthValue}}/>
}

function App() {
  

  return (
    <>
      <RecoilRoot>
       <InnerApp/>
       </RecoilRoot>
    </>
  )
}

export default App
