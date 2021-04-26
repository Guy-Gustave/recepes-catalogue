import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import { selectedProduct } from '../actions/Product';


const ProductDetails = () => {
  const product = useSelector(state => state.product)
  const  { productId } = useParams();
  const dispatch = useDispatch();
  console.log(productId);

  const fetchProductsDetail = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((err) => {
      console.log('err', err);
    });
  dispatch(selectedProduct(response.data));
  }
  useEffect(() => {
    if (productId && productId !== "") fetchProductsDetail()
  }, [productId])
  return (
    <div>
      <h1>ProductDetails</h1>
    </div>
  );
};

export default ProductDetails;