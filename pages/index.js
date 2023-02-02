import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Home from "./Home";

export default function index() {
  return <>
    <Head>
      <title>Intex Jo | Official Distributor for Intex In Jordan</title>
      <meta name="description" content="IntexJo" />
      <meta name="description" content="intex jo" />
      <meta name="description" content="intex pools" />
      <meta name="description" content="intex products" />
      <meta name="description" content="intex jordan" />
      <link rel="icon" href="/icon.jpg" />
    </Head>
    <Home />
  </>;
}
