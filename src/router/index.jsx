import { createBrowserRouter } from 'react-router-dom';
import Home from '../views/Home';
import ContentCategory from '../views/ContentCategory';
import ContentDetails from '../views/ContentDetails';
import Layout from '../components/Layout';
import ProtectedRoute from '../components/ProtectedRoute';
import Login from '../components/Login';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/home',
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: 'contentCategory/:id/contentDetail/:id',
        element: <ContentDetails />,
      },
      {
        path: 'contentCategory/:id',
        element: <ContentCategory />,
      },
      {
        path: '',
        element: <Home />,
      },
    ],
  },
]);
