// import React from 'react';

import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>상세보기 페이지입니다.</h1>
    </div>
  );
};

export default ProductDetail;
