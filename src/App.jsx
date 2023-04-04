import {RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Root from './Component/Root';
import Error from './Component/Error';
import Home from './Component/Home';
import Books from './Component/Books';
import Contact from './Component/Contact';
import BookDetails from './Component/BookDetails';
import Login from './Component/Login';

function App() {
 const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        element: <Home></Home>
      },
      {
        path: '/home',
        element: <Home></Home>
      },
      {
        path: '/library',
        element: <Books></Books>,
        loader: () => fetch('https://api.itbook.store/1.0/new')
      },
      {
        path: '/bookDetails/:id',
        element: <BookDetails></BookDetails>,
        loader: ({params}) => fetch(`https://api.itbook.store/1.0/books/${params.id}`)
      },
      
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      }
    ]
  }
 ])
 
  return (
    <RouterProvider router={router}>
      
    </RouterProvider>
  )
}

export default App
