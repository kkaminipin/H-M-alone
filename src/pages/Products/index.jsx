// import React from 'react'

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
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

  return (
    <div>
      <h1>상품들 소개</h1>
      <ul>
        {productList.map((product) => {
          return (
            <li key={product?.id}>
              <Link to={`${product?.id}`}>
                <div>
                  <h3>{product?.title}</h3>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Products;
