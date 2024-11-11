import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./styles.css";
import { Movie } from './pages/Movie';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { Register } from './pages/UserReg';
import { Login } from './pages/UserLogIn';
import { User } from './pages/User'; 


const router = createBrowserRouter([
  {
    path: "/",
    element:
      <App/>,
  },
  {
    path: "/:movieId",
    element:
    <Movie/>,
  },
  {
    path:"/register",
    element:
    <Register/>
  },
  {
    path:"/login",
    element:
    <Login/>
  },
  {
    path:"/user",
    element:
    <User/>
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  
  <RouterProvider router={router}/>
  
);


