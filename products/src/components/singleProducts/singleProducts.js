import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../../productsApi/API";
import "../../App.css";
import cart from '../../assets/cartIcon.svg';
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../../redux/Action";
const SingleProducts = () => {
  const dispatch = useDispatch();
  const selector = useSelector(state=>state.count);
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    products().then((res) => {
      let filterProduct = res.filter((itm, ind) => {
        if (itm.id === parseInt(id)) {
          return itm;
        }
      });
      setProduct(filterProduct);
    });
  }, [id]);

  const countHandler = ()=>{
    dispatch(increment());
  };
  return (
    <div className="single__product">
        <div className="cart">
            <p className="cartItem">{selector}</p>
            <img  src={cart} alt="Error" />
        </div>
      {product.length > 0 &&
        product.map((filterItm, ind) => (
          <>
            <div className="filter__product">
              <div>
                <img
                  src={filterItm.thumbnail}
                  className="filterImage card-img-top"
                  alt="..."
                />
              </div>
              <div>
                <h1> <strong>Brand - </strong> {filterItm.brand}</h1>
                <h4> <strong>Title - {filterItm.title}</strong> </h4>
                <p> <strong>Price - ${filterItm.price}</strong></p>
                <p> <strong>Discount - {filterItm.discountPercentage}%</strong></p>
                <p> <strong>Rating - {filterItm.rating}</strong></p>
                <button className="btn btn-success" onClick={countHandler}>Add to card</button>
              </div>
            </div>
          </>
        ))}
    </div>
  );
};

export default SingleProducts;
