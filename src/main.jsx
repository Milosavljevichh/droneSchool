import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import UserLayout from './pages/UserLayout.jsx';
import LessonDetails from './pages/LessonDetails.jsx';
import LessonsPage from './pages/LessonsPage.jsx';
import PaymentPlanPage from './pages/PaymentPlansPage.jsx';
import LogInPage from './pages/LogInPage.jsx';
import SignUpPage from './pages/SignUpPage.jsx';
import CreateLessonPage from './pages/CreateLessonPage.jsx';

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
  },
  {
    path: "/payment_plans",
    element: getUserLayout(<PaymentPlanPage />)
  },
  {
    path: "/log_in",
    element: getUserLayout(<LogInPage />)
  },
  {
    path: "/sign_up",
    element: getUserLayout(<SignUpPage />)
  },
  {
    path: "/create_lesson",
    element: getUserLayout(<CreateLessonPage />)
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
