import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home.tsx'
import About from './pages/about.tsx'
import Contact from './pages/contact.tsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/contact",
    element: <Contact />
  }
])


createRoot(document.getElementById('root')!).render(

  <RouterProvider router={router}>
    <App />
  </RouterProvider>

)
