import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import UserLayout from './pages/UserLayout.jsx';
import LessonDetails from './pages/LessonDetails.jsx';
import LessonsPage from './pages/LessonsPage.jsx';

const getUserLayout = (page) => <UserLayout>{page}</UserLayout>

const router = createBrowserRouter([
  {
    path: "/",
    element: getUserLayout(<App />),
  },
  {
    path: "/lessons/:lessonId",
    element: getUserLayout(<LessonDetails />),
  },
  {
    path: "/lessons",
    element: getUserLayout(<LessonsPage />)
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
