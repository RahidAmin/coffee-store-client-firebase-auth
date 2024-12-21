import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './Components/AddCoffee.jsx';
import UpdateCoffee from './Components/UpdateCoffee.jsx';
import SignUp from './Components/SignUp.jsx';
import SignIn from './Components/SignIn.jsx';
import AuthProvider from './Components/Providers/AuthProvider.jsx';
import Users from './Components/Users.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App>Hello world!</App>,
    loader: () => fetch('https://coffee-store-server-hlh4wyzk3-rahid-amins-projects.vercel.app/coffee')
  },
  {
    path: "addCoffee",
    element: <AddCoffee></AddCoffee>
  },
  {
    path: "updateCoffee/:id",
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({ params }) => fetch(`https://coffee-store-server-hlh4wyzk3-rahid-amins-projects.vercel.app/coffee/${params.id}`)
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>
  },
  {
    path: '/signin',
    element: <SignIn></SignIn>
  },
  {
    path: '/users',
    element: <Users></Users>,
    loader: () => fetch('https://coffee-store-server-hlh4wyzk3-rahid-amins-projects.vercel.app/user')
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
