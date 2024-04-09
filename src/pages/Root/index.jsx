// import React from 'react';
import { Link } from 'react-router-dom';

const Root = () => {
  return (
    <div>
      <h1>메인 페이지입니다!!!</h1>
      <ul>
        <li>
          <Link to={`/products`}>상품보기</Link>
        </li>
      </ul>
    </div>
  );
};

export default Root;
