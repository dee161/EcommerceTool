import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const projectKey = "12345678";
    const region = "eu-central-1";

    const fetchProductDetails = async () => {
      try {
        const response = await fetch(
          `https://api.${region}.aws.commercetools.com/${projectKey}/products/${productId}`,
          {
            headers: {
              Authorization: "Bearer VJk8VqIITAzugNLrMf19uOstRIA12hjO",
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductDetails();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-details-container">
      <div className="product-image-container">
        <p>Product Images:</p>
        <div className="image-scroll-container">
          {product.masterData?.current?.masterVariant?.images?.map(
            (image, index) => (
              <img
                key={index}
                src={image.url}
                alt={`Product ${index + 1}`}
                className="image-item"
              />
            )
          )}
        </div>
      </div>

      <div className="product-details">
        <h2>Product Details</h2>
        <h2>Product ID: {productId}</h2>
        <p>
          Product Name:{" "}
          {product.masterData &&
            product.masterData.current &&
            product.masterData.current.name &&
            product.masterData.current.name["en-US"]}
        </p>
        <p className="product-description">
          <small className="text-muted">
            <strong>Description:</strong>{" "}
            {product.masterData &&
              product.masterData.current &&
              product.masterData.current.description &&
              product.masterData.current.description["en-US"]}
          </small>
        </p>
        {product.masterData?.current?.masterVariant?.prices && (
          <div className="product-prices">
            <p className="card-subtitle mb-2 text-muted">Price:</p>
            <div className="price-list">
              {product.masterData.current.masterVariant.prices
                .filter((price) => price.country === "US")
                .map((price, index) => (
                  <div key={index} className="price">
                    <strong>
                      {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: price.value.currency || "USD",
                      }).format(price.value.centAmount / 100)}
                    </strong>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
