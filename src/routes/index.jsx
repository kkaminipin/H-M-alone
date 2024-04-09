// import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from '../pages/Root';
import Products from '../pages/Products';
import ErrorPage from '../pages/ErrorPage';
import ProductDetail from '../pages/ProductDetail';
import { useEffect, useState } from 'react';

const Routers = () => {
  const [productList, setProductList] = useState([]);
  const getProducts = async () => {
    const url = 'https://my-json-server.typicode.com/kkaminipin/H-M/products';
    const response = await fetch(url);
    const data = await response.json();
    setProductList(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/products',
      element: <Products productList={productList} />,
    },
    {
      path: '/products/:id',
      element: <ProductDetail productList={productList} />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Routers;
