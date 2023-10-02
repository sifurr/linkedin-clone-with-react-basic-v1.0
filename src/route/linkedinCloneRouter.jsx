import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../components/Home/Home";
import WelcomeSignIn from "../components/WelcomeSignIn/WelcomeSignIn";


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
            element: <WelcomeSignIn></WelcomeSignIn>
          }
        ]
      },
    ]

  }
])

export default linkedinRouter