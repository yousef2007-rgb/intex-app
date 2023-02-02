import React from "react";
import Head from "next/head";
import Header from "../../components/ui/Header";
import Intro from "../../components/ui/Intro/Intro";
import ProductsContainer from "../../components/ui/ProductsContainer";
import Footer from "../../components/ui/Footer/Footer";
import { addCartItem } from "../../slices/cartSlice";

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Intex Jo | Official Distributor for Intex In Jordan</title>
        <meta name="description" content="IntexJo" />
        <meta name="description" content="intex jo" />
        <meta name="description" content="intex pools" />
        <meta name="description" content="intex products" />
        <meta name="description" content="intex jordan" />
        <link rel="icon" href="/icon.jpg" />
      </Head>
      <Header />
      <main className="mt-28 tablet:mt-0">
        <Intro link={"/Assets/images/intro/hero1.jpg"} />
        <ProductsContainer />
      </main>
      <Footer />
    </div>
  );
}
