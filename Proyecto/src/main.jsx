import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import HomePage from './Componentes/Paginas/HomePage.jsx';
import BookDescription from './Componentes/Paginas/BookDescription.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element : <App/>
  },
  {
    path:"/home",
    element: <HomePage/>,
  },
  {
    path: "/descriptionBook",
    element: <BookDescription/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
