import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./styles.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element:
      <App/>,
  },
  
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  
  <RouterProvider router={router}/>
  
);


