import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './routes/Homepage';
import PostListpage from './routes/PostListpage';
import Write from './routes/Write';
import LoginPage from './routes/LoginPage';
import RegisterPage from './routes/RegisterPage';
import './index.css';
import MainLayout from './layout/MainLayout';
import SinglePostPage from './routes/SinglePostPage'; // Ensure you have this component
import { StrictMode } from 'react';
import { ClerkProvider } from '@clerk/clerk-react';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

// Correct router setup with an array of routes
const router = createBrowserRouter([
  {
    element: <MainLayout />,  // Corrected to lowercase 'children' and added missing comma
    children: [
      {
        path: '/',
        element: <Homepage />,
      },
      {
        path: 'post',
        element: <PostListpage />,
      },
      {
        path: ':slug',
        element: <SinglePostPage />,  // Correct component name and ensure it's imported
      },
      {
        path: 'write',
        element: <Write />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'register',
        element: <RegisterPage />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
  <RouterProvider router={router} />
  </ClerkProvider>
  </StrictMode>
);
