// import React from 'react'

import { Link } from 'react-router-dom';

const Products = ({ productList }) => {
  return (
    <div>
      <h1>상품들 소개</h1>
      <ul>
        {productList.map((product) => {
          return (
            <li key={product.id}>
              <Link to={`${product.id}`}>
                <div>
                  <h3>{product.title}</h3>
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
