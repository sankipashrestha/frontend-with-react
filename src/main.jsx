import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from './layouts/RootLayout';

import HomePage from './pages/NewHome'
import AboutPage from './pages/About'
import ServicesPage from './pages/Services'
import WorksPage from './pages/Works'
import BlogPage from './pages/Blog'
import ContactPage from './pages/Contact'
import UserDetailsPage from './pages/UserDetailsPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: '/about',
        element: <AboutPage />
      },
      {
        path: '/services',
        element: <ServicesPage />
      },
      {
        path: '/works',
        element: <WorksPage />
      },
      {
        path: '/blog',
        element: <BlogPage />
      },
      {
        path: "/contact",
        element: <ContactPage />
      },
      {
        path: '/user/:id',
        loader: async ({ params }) => {
          return { params };
        },
        element: <UserDetailsPage />
      }
    ]
  },

]);


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)