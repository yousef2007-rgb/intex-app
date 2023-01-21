import React from "react";
import Head from "next/head";
import Header from "../../components/ui/Header";
import Intro from "../../components/ui/Intro/Intro";
import ProductsContainer from "../../components/ui/ProductsContainer";
import { useSelector, useDispatch } from "react-redux";
import { addCartItem } from "../../slices/cartSlice";

export default function HomePage() {
  const count = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();
  return (
    <div>
      <Head>
        <title>Intex Store</title>
        <meta name="description" content="IntexJo" />
        <meta name="description" content="intex jo" />
        <meta name="description" content="intex pools" />
        <meta name="description" content="intex products" />
        <meta name="description" content="intex jordan" />
        <link rel="icon" href="/icon.jpg" />
      </Head>
      <Header />
      <Intro />
      <h1 onClick={() => dispatch(addCartItem())}>count is:-{count}</h1>
      <ProductsContainer />
    </div>
  );
}
