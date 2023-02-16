import React from 'react'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from './pages/login';
import Signup from './pages/signup';

const router = createBrowserRouter([
  {path: '/', element: <Login />},
  {path: '/signup', element: <Signup />}
])

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
