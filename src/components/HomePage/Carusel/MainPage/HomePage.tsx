import {useState, useEffect} from "react";

import { Product } from "../../../../helpers/Product";

import { Carousel } from "../../../Carusel/Carusel";
import { HotPrices } from "../../../../HotPrices";
import { Category } from "../../../Category/Category";

import './HomePage.scss'


export const HomePage = () => {
  const [products] = useState<Product[]>(() => {
    const storedProduct = localStorage.getItem('product');

    return storedProduct ? JSON.parse(storedProduct) : [];
  });



  useEffect(() => {
    if (products.length !== 0) {
      localStorage.setItem('products', JSON.stringify(products));
    }
  }, [products]);


  return (
    <div className="home">
    <Carousel />

    <HotPrices products={products}/>

    <Category product={products} />
    </div>
  );
}
