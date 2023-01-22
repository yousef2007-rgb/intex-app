import React, { useEffect } from "react";
import Cart from "../../../public/Assets/icons/Cart";
import CartComponent from "../CartComponent";
import CartContainer from "../CartComponent/CartContainer";
import { useDispatch, useSelector } from "react-redux";
import { addCartItem } from "../../../slices/cartSlice";
import { tougleCart } from "../../../slices/cartVisabilitySlice";
export default function Cart2() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className=" mx-4 w-8 h-28 flex items-center hover:border-secondery border-transparent border-t-4 cursor-pointer ">
      <div onClick={() => dispatch(tougleCart())} className="relative">
        {cart.length != 0 ? (
          <span className=" absolute bottom-4 left-4 bg-primary font-bold text-white rounded-full w-5 h-5 flex items-center justify-center">
            {cart.length}{" "}
          </span>
        ) : (
          ""
        )}
        <Cart />
      </div>

      <CartContainer cart={cart} />
    </div>
  );
}
