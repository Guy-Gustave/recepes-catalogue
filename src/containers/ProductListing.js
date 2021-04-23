import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import ProductComponent from '../components/ProductComponent';

const ProductListing = () => {
  const products = useSelector((state) => state);

  const fetchProducts = async () => {
    const response = await axios
    .get ("https://vpic.nhtsa.dot.gov/api/vehicles/GetWMIsForManufacturer/hon?format=json")
    .catch((err)=> {
      console.log("Err", err);
    });
    console.log(response.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  console.log(products);
  
  return (
    <div>
      <ProductComponent />
    </div>
  );
};

export default ProductListing;