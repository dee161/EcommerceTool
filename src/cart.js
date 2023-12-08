// Cart.js

import React from 'react';
import './Cart.css';

const Cart = ({ cartData }) => {
  return (
    <div>
      <h2>Your Cart</h2>
      {cartData && cartData.length > 0 ? (
        <div className="cart-row">
          {cartData.map((item) => (
            <div key={item.id} className="card product-card">
              {/* Display image */}
              <div className="card-image-container">
                {item.masterData &&
                  item.masterData.current &&
                  item.masterData.current.masterVariant &&
                  item.masterData.current.masterVariant.images &&
                  item.masterData.current.masterVariant.images[0] &&
                  item.masterData.current.masterVariant.images[0].url && (
                    <img
                      src={item.masterData.current.masterVariant.images[0].url}
                      alt={item.masterData.current.masterVariant.name || 'Product'}
                      className="card-img-top"
                    />
                  )}
              </div>

              <div className="card-body">
                {/* Display name */}
                <p className="card-name">
                  Name:&nbsp;
                  <span className="card-title">
                    <strong>
                      {item.masterData &&
                        item.masterData.current &&
                        item.masterData.current.name &&
                        item.masterData.current.name['en-US']}
                    </strong>
                  </span>
                </p>

                {/* Display prices for US */}
                {item.masterData &&
                  item.masterData.current &&
                  item.masterData.current.masterVariant &&
                  item.masterData.current.masterVariant.prices && (
                    <div className="product-prices">
                      <p className="card-subtitle mb-2 text-muted">
                        Price:
                      </p>
                      <div className="price-list">
                        {item.masterData.current.masterVariant.prices
                          .filter((price) => price.country === 'US') // Filter prices for US
                          .map((price, index) => (
                            <div key={index} className="price">
                              <strong>${price.value.currency} {price.value.centAmount / 100}</strong>
                            </div>
                          ))}
                      </div>
                    </div>
                  )}

                {/* Display description */}
                <p className="card-description">
                  <small className="text-muted">
                    <strong>Description:</strong>{' '}
                    {item.masterData &&
                      item.masterData.current &&
                      item.masterData.current.description &&
                      item.masterData.current.description['en-US'].split('.')[0]}.
                  </small>
                </p>
                {/* Add to Cart Button */}
                <button onClick={() => { /* Handle removal from cart */ }} className="btn btn-danger">
                  buy item
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;