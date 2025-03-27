import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import UserLayout from './pages/UserLayout.jsx';

const getUserLayout = (page) => <UserLayout>{page}</UserLayout>

const router = createBrowserRouter([
  {
    path: "/",
    element: getUserLayout(<App />),
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
