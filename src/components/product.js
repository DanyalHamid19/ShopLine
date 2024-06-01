import React from "react";
import "./product.css";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";

export default function Product() {
  const disPatch=useDispatch();
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((result) => setProducts(result));
  }, []);


  const addToCart=(product)=>{
    disPatch(add(product)) 
  }
  const card = Products.map((product) => (
    <div className="col-md-3 cardd">
      <div
        className="card"
        style={{ width: "17rem", height: "26rem" }}
        key={product.id}
      >
        <div className="text-center picture">
          <img
            src={product.image}
            className="card-img-top"
            alt="Placeholder image"
            style={{ width: "100px", height: "130px" }}
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">Price: {product.price} Pkr</p>
          <a href="#" className="btn btn-primary" onClick={()=>{addToCart(product)}}>
            Add to cart
          </a>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <h1 className="heading">product page</h1>
      <div className="row">{card}</div>
    </>
  );
}
