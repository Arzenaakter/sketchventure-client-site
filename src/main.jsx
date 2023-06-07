import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import AuthProvider from './AuthProvider/AuthProvider';
import './index.css'
import router from './Routes/Route';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
           
                    <AuthProvider>
                    <RouterProvider router={router} />
                    </AuthProvider>
             
  </React.StrictMode>,
)
