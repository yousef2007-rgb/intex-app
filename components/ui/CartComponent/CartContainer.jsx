import React, { useEffect } from "react";
import CardItem from "./CardItem";
import { useDispatch, useSelector } from "react-redux";
import { addCartItem } from "../../../slices/cartSlice";
import { tougleCart } from "../../../slices/cartVisabilitySlice";
export default function CartContainer({ cart }) {
  const visability = useSelector((state) => state.cartVisability);
  const dispatch = useDispatch();
  return (
    <>
      <div
        className=" absolute top-0 left-0 w-screen h-screen "
        style={{ display: visability }}
        onClick={() => dispatch(tougleCart())}
      ></div>
      <div
        className=" bg-white absolute flex flex-col  max-w-sm w-full mx-2 right-0 shadow-lg p-5 rounded-2xl top-28"
        style={{ display: visability }}
      >
        <h1 className=" p-2 font-bold w-full border-b">Cart</h1>
        {cart.length == 0 ? (
          <div>
            <h1 className="font-bold py-10">Your Cart Is Empty</h1>
          </div>
        ) : (
          cart.map((item, index) => <CardItem key={index} {...item} />)
        )}
      </div>
    </>
  );
}
