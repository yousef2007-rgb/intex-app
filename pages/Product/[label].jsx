import { useRouter } from "next/router";

import React, { use, useState } from "react";
import Head from "next/head";
import Header from "../../components/ui/Header";
import Intro from "../../components/ui/Intro/Intro";
import ProductsContainer from "../../components/ui/ProductsContainer/ProductsContainer";
import useData from "../../Hooks/useData";
import { useDispatch, useSelector } from "react-redux";
import { addCartItem } from "../../slices/cartSlice";
import componentData from "../../data/ProductPage.json";

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(
    `https://orders.fore-site.net/media_admin/api/api_secure.php?module=inventory&method=category_products&sk1=DICOSECSK1oolshdsf33sadGGHsd376&debug=yes&device_id=33333333&data=1&filter1=55&lang=en&username=28&field_subcategory=151`
  );
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data, isLoading: false } };
}

export default function HomePage({ data, isLoading }) {
  // const [data, isLoading] = useData(
  //   "https://orders.fore-site.net/media_admin/api/api_secure.php?module=inventory&method=category_products&sk1=DICOSECSK1oolshdsf33sadGGHsd376&debug=yes&device_id=33333333&data=1&filter1=55&lang=en&username=28&field_subcategory=151",
  //   "data"
  // );
  const [title, setTitle] = useState("");
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const router = useRouter();
  const label = router.query;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const item = cart.find((x) => x.item.label == label.label);
  const language = useSelector((state) => state.language);
  const uiData =
    language == "arabic" ? componentData.arabic : componentData.english;

  const [counter, setCounter] = useState(1);
  return (
    <div>
      <Header />
      <div className="mt-28 p-5">
        {isLoading ? (
          <img className=" h-screen w-screen" src="/Assets/GIF/Loading.gif" />
        ) : (
          <div className=" flex items-center">
            {data.data.res
              .filter((x) => x.label == label.label)
              .map((product, index) => (
                <div key={index} className="h-fit w-full">
                  <Head>
                    <title>Intex Jo | {product.field_item_name}</title>
                    <meta name="description" content="IntexJo" />
                    <meta name="description" content="IntexJo" />
                    <meta name="description" content="intex jo" />
                    <meta name="description" content="intex pools" />
                    <meta name="description" content="intex products" />
                    <meta name="description" content="intex jordan" />
                    <meta
                      property="og:title"
                      content={`Intex Jo | ${product.field_item_name}`}
                    />
                    <meta property="og:type" content="product" />
                    <meta
                      property="og:url"
                      content={`https://www.intexjo.com/Product/${product.label}`}
                    />
                    <meta property="og:image" content={product.image} />
                    <meta
                      property="og:description"
                      content={product.field_item_name}
                    />
                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:site" content="@intex-jo" />
                    <meta
                      name="twitter:title"
                      content={`Intex Jo | ${product.field_item_name}`}
                    />
                    <meta
                      name="twitter:description"
                      content={product.field_item_name}
                    />
                    <meta name="twitter:image" content={product.image} />
                    <link rel="icon" href="/icon.jpg" />
                  </Head>
                  <div className=" flex w-full flex-wrap items-center justify-evenly border-b">
                    <img
                      className="aspect-square h-fit w-full max-w-lg object-contain tablet:w-1/2 tablet:min-w-[400px]"
                      src={product.image}
                    />

                    <article className="ml-4 h-fit w-full font-bold tablet:w-1/2">
                      <div>
                        <h1 className=" my-2 text-3xl text-blue_gray">
                          {product.field_item_name}
                        </h1>
                        <h2 className="  w-full border-b pb-10 font-normal capitalize">
                          {uiData.itemNumber}: {product.label}
                        </h2>
                      </div>
                      <div className=" flex flex-col">
                        <p className=" my-5 ml-auto text-2xl capitalize">
                          {product.field_wholesale_price * 1.5} JOD
                        </p>

                        <div className=" ml-auto flex w-full text-center shadow-md tablet:w-fit">
                          <button
                            onClick={() => {
                              if (counter > 0) {
                                setCounter(counter - 1);
                              }
                            }}
                            className=" rounded-l-xl bg-slate-800 p-2 px-3 font-bold text-white"
                          >
                            -
                          </button>
                          <p className=" flex-1 py-2 tablet:px-24">{counter}</p>

                          <button
                            onClick={() => setCounter(counter + 1)}
                            className=" rounded-r-xl bg-slate-800 py-2 px-3 font-bold text-white"
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => {
                            if (counter != 0) {
                              dispatch(
                                addCartItem({
                                  item: {
                                    image: product.image,
                                    discription: product.field_item_name,
                                    label: product.label,
                                    price: product.field_wholesale_price * 1.5,
                                  },
                                  quantity: counter,
                                })
                              );
                            } else {
                              alert("Set A Quantity Please!");
                            }
                          }}
                          className=" my-5 ml-auto w-full rounded-xl border-2 border-transparent bg-secondery px-20 py-2 font-bold uppercase text-white hover:border-secondery hover:bg-white hover:text-secondery tablet:w-fit"
                        >
                          {uiData.addToCartButton}
                        </button>
                      </div>
                    </article>
                  </div>
                  <ProductsContainer
                    title={uiData.relatedProducts}
                    limit={3}
                    number={product.field_subcategory}
                    data={data}
                    isLoading={isLoading}
                  />
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
