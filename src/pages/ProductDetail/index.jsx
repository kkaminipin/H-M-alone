// import React from 'react';

import { useParams } from 'react-router-dom';

const ProductDetail = ({ productList }) => {
  const { id } = useParams();
  return (
    <div>
      <h1>상세보기 페이지입니다.</h1>
      <div>
        <h3>{productList[id].title}</h3>
        <img src={productList[id].img} alt={productList[id].title} />
        <p>가격 : {productList[id].price}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
