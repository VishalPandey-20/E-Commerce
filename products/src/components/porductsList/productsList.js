import React, { useEffect, useState } from "react";
import products from "../../productsApi/API";
import "../../App.css";
import { useNavigate } from "react-router-dom";
const ProductsList = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    products().then((res) => {
      setProduct(res);
    });
  }, []);
  const routeHandle = (id) => {
    navigate(`product/${id}`);
  };
  return (
    <div className="porducts__list">
      {product.length > 0 &&
        product.map((itms, ind) => (
          <>
            <div
              className="card shadow p-3 mb-5 bg-body rounded"
              style={{ cursor: "pointer" }}
              onClick={() => routeHandle(itms.id)}
              key={itms.id}
            >
              <img src={itms.thumbnail} className="image card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{itms.title}</h5>
                <p className="card-text">{itms.description}</p>
              </div>
            </div>
          </>
        ))}
    </div>
  );
};

export default ProductsList;
