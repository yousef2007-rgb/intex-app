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
        className=" fixed top-0 left-0  h-screen w-screen "
        style={{
          display: visability,
        }}
        onClick={() => dispatch(tougleCart())}
      ></div>
      <div
        className={` absolute top-32  mx-2  flex w-screen max-w-[340px] flex-col rounded-2xl  bg-white p-5 shadow-lg tablet:right-1/2 tablet:translate-x-[50%]`}
        style={{
          display: visability,
          left: language == "english" ? "unset" : 0,
          right: language == "english" ? 0 : "unset",
        }}
      >
        <h1
          className=" w-full border-b p-2 font-bold"
          style={{
            textAlign: language == "arabic" ? "right" : "left",
          }}
        >
          {uiData.title}
        </h1>
        {cart.length == 0 ? (
          <div>
            <h1 className="py-10 font-bold">Your Cart Is Empty</h1>
          </div>
        ) : (
          <>
            {cart.map((item, index) => (
              <CardItem key={index} {...item} />
            ))}

            <a
              className=" w-full rounded-xl border-2 border-green-500 bg-green-500 py-2 px-5 text-center font-bold capitalize text-white hover:bg-white hover:text-green-500"
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
