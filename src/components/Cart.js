import React from 'react';
import "./cart.css";
import { useSelector,useDispatch } from 'react-redux';
import { remove } from '../store/cartSlice';


export default function Cart() {
  const Products=useSelector(state=>state.cart)
  const dispatch=useDispatch();

const removeToCart=(id)=>{
dispatch(remove(id));
}



const card = Products.map((product) => (
  <div className="col-md-4 cardd">
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
        <a
          href="#"
          className="btn btn-danger"
          onClick={() => {
            removeToCart(product.id);
          }}
        >
          Remove From cart
        </a>
      </div>
    </div>
  </div>
));



  return (
   <div className="row">
    {card}
   </div>
  );
}
