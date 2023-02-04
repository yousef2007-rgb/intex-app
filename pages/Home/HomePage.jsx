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

        <meta
          name="keywords"
          content="IntexJo, intex jo, intex, intex jordan, intex product, Swimming pools, above ground pools, outdoor pools, pools, air mattress, airbeds, inflatable spas, spas, purespa, portable spa, dura-beam airbeds, premaire airbeds, realtree airbeds, air furniture, inflatable furniture, pool floats, pool toys, inflatable boats, boats, hot tubs"
        ></meta>
        <meta
          property="og:title"
          content="Intex Jo | Official Distributor for Intex In Jordan"
        />
        <meta property="og:type" content="products" />
        <meta property="og:url" content="https://www.intexjo.com/" />
        <meta
          property="og:image"
          content="https://www.intexjo.com/Assets/images/www.intexjo.com.png"
        />
        <meta
          property="og:description"
          content="official distrubutor of intex in jordan that sells all kinds of pools ,pools equipment and accesories"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@intex-jo" />
        <meta
          name="twitter:title"
          content="Intex Jo | Official Distributor for Intex In Jordan"
        />
        <meta
          name="twitter:description"
          content="official distrubutor of intex in jordan that sells all kinds of pools ,pools equipment and accesories"
        />
        <meta
          name="twitter:image"
          content="https://www.intexjo.com/Assets/images/www.intexjo.com.png"
        />
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
