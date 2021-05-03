import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { selectedProduct } from '../actions/Product';
import '../App.css';

const ProductDetails = () => {
  const product = useSelector((state) => state.product);
  const {
    image, title, price, category, description,
  } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();

  const fetchProductsDetail = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
    dispatch(selectedProduct(response.data));
  };
  useEffect(() => {
    if (productId && productId !== '') fetchProductsDetail();
  }, [productId]);
  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="detail-product">
          <div className="column lp">
            <div className="link">
              <h1>
                Back to
                <Link to="/">ProductListing </Link>
              </h1>
            </div>
            <img className="ui fluid image" src={image} alt={image} />
          </div>
          <div className="column rp">
            <h1>{title}</h1>
            <h2 className="tag-price">
              $
              {price}
            </h2>
            <h3 className="tag-categoryr">{category}</h3>
            <p>{description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
