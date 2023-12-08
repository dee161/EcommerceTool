// import React, { useState } from 'react';

// const ProductCard = ({ product }) => {
//   const [count, setCount] = useState(0);

//   const handleIncrement = () => {
//     setCount(count + 1);
//   };

//   const handleDecrement = () => {
//     setCount(count > 0 ? count - 1 : 0);
//   };

//   return (
//     <div className="card mb-3">
//       {/* Display image */}
//       <div style={{ position: 'relative', width: '100%', height: '0', paddingBottom: '100%' }}>
//         {product.masterData &&
//           product.masterData.current &&
//           product.masterData.current.masterVariant &&
//           product.masterData.current.masterVariant.images &&
//           product.masterData.current.masterVariant.images[0] &&
//           product.masterData.current.masterVariant.images[0].url && (
//             <img
//               src={product.masterData.current.masterVariant.images[0].url}
//               alt={product.masterData.current.masterVariant.name || 'Product'}
//               className="card-img-top"
//               style={{
//                 position: 'absolute',
//                 top: '0',
//                 left: '0',
//                 width: '100%',
//                 height: '100%',
//                 objectFit: 'cover',
//               }}
//             />
//           )}
//       </div>

//       <div className="card-body">
//         {/* Display name */}
//         <p style={{ fontSize: 'smaller', marginBottom: '-10px' }}>
//           Name:&nbsp;
//           <span className="card-title">
//             <strong>
//               {product.masterData &&
//                 product.masterData.current &&
//                 product.masterData.current.name &&
//                 product.masterData.current.name['en-US']}
//             </strong>
//           </span>
//         </p>

//         {/* Display prices for US */}
//         {product.masterData &&
//           product.masterData.current &&
//           product.masterData.current.masterVariant &&
//           product.masterData.current.masterVariant.prices && (
//             <div className="product-prices" style={{ marginBottom: '-10px' }}>
//               <p className="card-subtitle mb-2 text-muted">
//                 Price:
//               </p>
//               <div className="list-unstyled">
//                 {product.masterData.current.masterVariant.prices
//                   .filter((price) => price.country === 'US') // Filter prices for US
//                   .map((price, index) => (
//                     <div key={index} className="price">
//                       <strong>${price.value.currency} {price.value.centAmount / 100}</strong>
//                     </div>
//                   ))}
//               </div>
//             </div>
//           )}

//         {/* Counter */}
//         <div style={{ display: 'flex', alignItems: 'center', marginBottom: '-25px' }}>
//           <p className="card-text">
//             <strong>Qty:</strong>&nbsp;
//           </p>
//           <button onClick={handleDecrement} className="btn btn-outline-secondary btn-sm">
//             -
//           </button>
//           <p className="card-text mx-2">{count}</p>
//           <button onClick={handleIncrement} className="btn btn-outline-secondary btn-sm">
//             +
//           </button>
//         </div>

//         {/* Display description */}
//         <p className="card-text" style={{ marginBottom: '0px' }}>
//           <small className="text-muted">
//             <strong>Description:</strong>{' '}
//             {product.masterData &&
//               product.masterData.current &&
//               product.masterData.current.description &&
//               product.masterData.current.description['en-US'].slice(0, 50)}
//           </small>
//         </p>

//         {/* Add to Cart button */}
//         <button className="btn btn-dark">Add to Cart</button>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;
// import React, { useState } from 'react';
// // import './index.css';

// const ProductCard = ({ product }) => {
//   const [count, setCount] = useState(0);

//   const handleIncrement = () => {
//     setCount(count + 1);
//   };

//   const handleDecrement = () => {
//     setCount(count > 0 ? count - 1 : 0);
//   };

//   return (
//     <div className="card mb-3">
//       {/* Display image */}
//       <div style={{ position: 'relative', width: '100%', height: '0', paddingBottom: '100%' }}>
//         {product.masterData &&
//           product.masterData.current &&
//           product.masterData.current.masterVariant &&
//           product.masterData.current.masterVariant.images &&
//           product.masterData.current.masterVariant.images[0] &&
//           product.masterData.current.masterVariant.images[0].url && (
//             <img
//               src={product.masterData.current.masterVariant.images[0].url}
//               alt={product.masterData.current.masterVariant.name || 'Product'}
//               className="card-img-top"
//               style={{
//                 position: 'absolute',
//                 top: '0',
//                 left: '0',
//                 width: '100%',
//                 height: '100%',
//                 objectFit: 'cover',
//               }}
//             />
//           )}
//       </div>

//       <div className="card-body">
//         {/* Display name */}
//         <p style={{ fontSize: 'smaller', marginBottom: '-10px' }}>
//           Name:&nbsp;
//           <span className="card-title">
//             <strong>
//               {product.masterData &&
//                 product.masterData.current &&
//                 product.masterData.current.name &&
//                 product.masterData.current.name['en-US']}
//             </strong>
//           </span>
//         </p>

//         {/* Display prices for US */}
//         {product.masterData &&
//           product.masterData.current &&
//           product.masterData.current.masterVariant &&
//           product.masterData.current.masterVariant.prices && (
//             <div className="product-prices" style={{ marginBottom: '-10px' }}>
//               <p className="card-subtitle mb-2 text-muted">
//                 Price:
//               </p>
//               <div className="list-unstyled">
//                 {product.masterData.current.masterVariant.prices
//                   .filter((price) => price.country === 'US') // Filter prices for US
//                   .map((price, index) => (
//                     <div key={index} className="price">
//                       <strong>${price.value.currency} {price.value.centAmount / 100}</strong>
//                     </div>
//                   ))}
//               </div>
//             </div>
//           )}

//         {/* Counter */}
//         <div style={{ display: 'flex', alignItems: 'center', marginBottom: '-25px' }}>
//           <p className="card-text">
//             <strong>Qty:</strong>&nbsp;
//           </p>
//           <button onClick={handleDecrement} className="btn btn-outline-secondary btn-sm">
//             -
//           </button>
//           <p className="card-text mx-2">{count}</p>
//           <button onClick={handleIncrement} className="btn btn-outline-secondary btn-sm">
//             +
//           </button>
//         </div>

//         {/* Display description */}
//         <p className="card-text" style={{ marginBottom: '0px' }}>
//           <small className="text-muted">
//             <strong>Description:</strong>{' '}
//             {product.masterData &&
//               product.masterData.current &&
//               product.masterData.current.description &&
//               product.masterData.current.description['en-US'].slice(0, 50)}
//           </small>
//         </p>

//         {/* Add to Cart button */}
//         <button className="addCart">Add to Cart</button>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;
// import React, { useState } from 'react';
// import './ProductCard.css'; // Import your CSS file for styling


// const ProductCard = ({ product, addToCart }) => {
//   const [count, setCount] = useState(0);

//   const handleIncrement = () => {
//     setCount(count + 1);
//   };

//   const handleDecrement = () => {
//     setCount(count > 0 ? count - 1 : 0);
//   };

//   return (
//     <div className="card mb-3 product-card">
//       {/* Display image */}
//       <div className="card-image-container">
//         {product.masterData &&
//           product.masterData.current &&
//           product.masterData.current.masterVariant &&
//           product.masterData.current.masterVariant.images &&
//           product.masterData.current.masterVariant.images[0] &&
//           product.masterData.current.masterVariant.images[0].url && (
//             <img
//               src={product.masterData.current.masterVariant.images[0].url}
//               alt={product.masterData.current.masterVariant.name || 'Product'}
//               className="card-img-top"
//             />
//           )}
//       </div>

//       <div className="card-body">
//         {/* Display name */}
//         <p className="card-name">
//           Name:&nbsp;
//           <span className="card-title">
//             <strong>
//               {product.masterData &&
//                 product.masterData.current &&
//                 product.masterData.current.name &&
//                 product.masterData.current.name['en-US']}
//             </strong>
//           </span>
//         </p>

//         {/* Display prices for US */}
//         {product.masterData &&
//           product.masterData.current &&
//           product.masterData.current.masterVariant &&
//           product.masterData.current.masterVariant.prices && (
//             <div className="product-prices">
//               <p className="card-subtitle mb-2 text-muted">
//                 Price:
//               </p>
//               <div className="price-list">
//                 {product.masterData.current.masterVariant.prices
//                   .filter((price) => price.country === 'US') // Filter prices for US
//                   .map((price, index) => (
//                     <div key={index} className="price">
//                       <strong>${price.value.currency} {price.value.centAmount / 100}</strong>
//                     </div>
//                   ))}
//               </div>
//             </div>
//           )}

//         {/* Counter */}
//         <div className="counter-section">
//           <p className="card-text">
//             <strong>Qty:</strong>&nbsp;
//           </p>
//           <button onClick={handleDecrement} className="counter-button">
//             -
//           </button>
//           <p className="card-text counter-value">{count}</p>
//           <button onClick={handleIncrement} className="counter-button">
//             +
//           </button>
//         </div>
      

//         {/* Display description */}
//         <p className="card-description">
//           <small className="text-muted">
//             <strong>Description:</strong>{' '}
//             {product.masterData &&
//               product.masterData.current &&
//               product.masterData.current.description &&
//               product.masterData.current.description['en-US'].split('.')[0]}.
//           </small>
//         </p>
//          {/* Add to Cart Button */}
//          <button onClick={() => { addToCart(product); console.log('Item added to cart:', product); }} className="btn btn-primary">
//         Add to Cart
//       </button>

//       </div>
//     </div>
//   );
// };

// export default ProductCard;


import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product, addToCart }) => {
  const [count, setCount] = useState(0);

  const handleIncrement = (event) => {
    event.preventDefault();
    setCount(count + 1);
  };

  const handleDecrement = (event) => {
    event.preventDefault();
    setCount(count > 0 ? count - 1 : 0);
  };

  return (
    <div className="card mb-3 product-card">
      <div className="card-image-container">
        {product.masterData &&
          product.masterData.current &&
          product.masterData.current.masterVariant &&
          product.masterData.current.masterVariant.images &&
          product.masterData.current.masterVariant.images[0] &&
          product.masterData.current.masterVariant.images[0].url && (
            <img
              src={product.masterData.current.masterVariant.images[0].url}
              alt={product.masterData.current.masterVariant.name || 'Product'}
              className="card-img-top"
            />
          )}
      </div>

      <div className="card-body">
        <p className="card-name">
          Name:&nbsp;
          <span className="card-title">
            <strong>
            <Link to={`/product/${product.id}`}>
              {product.masterData &&
                product.masterData.current &&
                product.masterData.current.name &&
                product.masterData.current.name['en-US']}
              </Link>
            </strong>
          </span>
        </p>

        {product.masterData &&
          product.masterData.current &&
          product.masterData.current.masterVariant &&
          product.masterData.current.masterVariant.prices && (
            <div className="product-prices">
              <p className="card-subtitle mb-2 text-muted">Price:</p>
              <div className="price-list">
                {product.masterData.current.masterVariant.prices
                  .filter((price) => price.country === 'US')
                  .map((price, index) => (
                    <div key={index} className="price">
                      <strong>
                        {new Intl.NumberFormat('en-US', {
                          style: 'currency',
                          currency: price.value.currency || 'USD',
                        }).format(price.value.centAmount / 100)}
                      </strong>
                    </div>
                  ))}
              </div>
            </div>
          )}

        <div className="counter-section">
          <p className="card-text">
            <strong>Qty:</strong>&nbsp;
          </p>
          <button onClick={handleDecrement} className="counter-button">
            -
          </button>
          <p className="card-text counter-value">{count}</p>
          <button onClick={handleIncrement} className="counter-button">
            +
          </button>
        </div>
        <p className="card-description">
          <small className="text-muted">
            <strong>Description:</strong>{' '}
            {product.masterData &&
              product.masterData.current &&
              product.masterData.current.description &&
              product.masterData.current.description['en-US'].split('.')[0]}.
          </small>
        </p>
        <button
          onClick={() => {
            addToCart(product);
            console.log('Item added to cart:', product);
          }}
          className="btn btn-primary"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
