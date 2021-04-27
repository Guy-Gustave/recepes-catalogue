/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import ProductComponent from '../components/ProductComponent';
import { setProducts } from '../actions/Product';

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get('https://fakestoreapi.com/products').catch((err) => {
        console.log('Err', err);
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  console.log('Products: ', products);

  return (
    <div className="affiche">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
