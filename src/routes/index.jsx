// import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from '../pages/Root';
import Products from '../pages/Products';
import ErrorPage from '../pages/ErrorPage';
import ProductDetail from '../pages/ProductDetail';

const Routers = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/products',
      element: <Products />,
    },
    {
      path: '/products/:id',
      element: <ProductDetail />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Routers;
