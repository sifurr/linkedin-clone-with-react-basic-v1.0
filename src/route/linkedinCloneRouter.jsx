import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../components/Home/Home";
import WelcomeRegister from "../components/WelcomeRegister/WelcomeRegister";
import Welcome from "../pages/Welcome/Welcome";


const linkedinRouter = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        children: [          
          {
            path: '/welcome-sign-in',
            element: <Welcome></Welcome>
          },
          {
            path: '/welcome-register',
            element: <WelcomeRegister></WelcomeRegister>
          }
        ]
      },
    ]

  }
])

export default linkedinRouter