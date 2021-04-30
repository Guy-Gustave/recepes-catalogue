/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import ProductComponent from '../components/ProductComponent';
import { setProducts } from '../actions/Product';

const ProductListing = () => {
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios.get('https://fakestoreapi.com/products');
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="affiche">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
