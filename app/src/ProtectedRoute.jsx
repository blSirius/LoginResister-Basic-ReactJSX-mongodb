import React from 'react'

// add react-router-dom
import { Navigate } from 'react-router-dom'


function ProtectedRoute({children}) {
    if (sessionStorage.getItem('token') === null){
        return <Navigate to="/login" />
    }
  return children;
}
export default ProtectedRoute