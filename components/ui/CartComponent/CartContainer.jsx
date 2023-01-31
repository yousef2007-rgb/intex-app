import React, { useEffect } from "react";
import CardItem from "./CardItem";
import { useDispatch, useSelector } from "react-redux";
import { addCartItem, resetCartItem } from "../../../slices/cartSlice";
import { tougleCart } from "../../../slices/cartVisabilitySlice";
import { clearItems } from "../../../slices/cartSlice";
import { useState } from "react";
import componentData from "../../../data/Cart.json";
function CartContainer({ cart }) {
  const visability = useSelector((state) => state.cartVisability);
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [whatsappText, setWhatsAppText] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const language = useSelector((state) => state.language);
  const uiData =
    language == "arabic" ? componentData.arabic : componentData.english;
  useEffect(() => {
    if (cartItems.length == 0 && window.localStorage.getItem("cart")) {
      dispatch(
        resetCartItem([...JSON.parse(window.localStorage.getItem("cart"))])
      );
    }
  }, []);
  useEffect(() => {
    if (cartItems.length != 0) {
      window.localStorage.setItem("cart", JSON.stringify(cartItems));
    }
    cart.map((x) => {
      setWhatsAppText(
        `%0D${whatsappText} item=%20${x.item.discription.replace(" ", "%20")}X${
          x.quantity
        }%20total%20price=${x.quantity * x.item.price * 1.5}`
      );
    });
  }, [cartItems]);
  return (
    <>
      <div
        className=" absolute top-0 left-0  w-screen h-screen "
        style={{
          display: visability,
        }}
        onClick={() => dispatch(tougleCart())}
      ></div>
      <div
        className=" bg-white absolute flex flex-col  max-w-sm w-full mx-2 shadow-lg p-5 rounded-2xl top-28"
        style={{
          display: visability, 
language == "arabic" ? left:0:right:0
        }}
      >
        <h1
          className=" p-2 font-bold w-full border-b"
          style={{
            textAlign: language == "arabic" ? "right" : "left",
          }}
        >
          {uiData.title}
        </h1>
        {cart.length == 0 ? (
          <div>
            <h1 className="font-bold py-10">Your Cart Is Empty</h1>
          </div>
        ) : (
          <>
            {cart.map((item, index) => (
              <CardItem key={index} {...item} />
            ))}

            <a
              className=" bg-green-500 capitalize w-full py-2 text-center font-bold rounded-xl border-2 border-green-500 hover:bg-white hover:text-green-500 px-5 text-white"
              href={`https://wa.me/798642783?text=order:\n${whatsappText}`}
              target={"blank"}
              onClick={() => dispatch(clearItems())}
            >
              {uiData.checkoutButton}
            </a>
          </>
        )}
      </div>
    </>
  );
}
CartContainer.displayName = "cart";

export default CartContainer;
