import { createBrowserRouter } from 'react-router-dom';
import Home from '../views/Home';
import ContentCategory from '../views/contentCategory';
import ContentDetails from '../views/contentDetails';
import Layout from '../components/layout';
import ProtectedRoute from '../components/ProtectedRoute';
import Login from '../components/login';

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
