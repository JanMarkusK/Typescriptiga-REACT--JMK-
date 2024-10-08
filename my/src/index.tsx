import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AboutMe from './pages/AboutMe'
import Login from './pages/Login'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom"

// Define your router with child routes
const router = createBrowserRouter(
   createRoutesFromElements(
     <Route
       path="/" 
       element={<App />} 
     >
       <Route path="/login" element={<Login/>} />
       <Route path="/about-me" element={<AboutMe/>} />
     </Route>
   ),
   { basename: "/Typescriptiga-REACT--JMK-" }
 );

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
