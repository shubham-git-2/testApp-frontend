import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './Home.tsx'
import SignupPage from "./pages/SignupPage.tsx"
import UserCreateAction from "./action/user/create.tsx"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        children: [
            {
                path: "/signup",
                element: <SignupPage />,
            },
        ]
    },
    {
        path: "/users",
        action: UserCreateAction,
    },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
        <RouterProvider router={router}/>
  </StrictMode>,
)
