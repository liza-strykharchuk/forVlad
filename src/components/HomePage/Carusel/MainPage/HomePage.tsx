import {useState} from "react";

import jsonProduct from "../../../../products.json";

import { Product } from "../../../../helpers/Product";

import { Carousel } from "../../../Carusel/Carusel";
import { Category } from "../../../Category/Category";
import { ProductSlider } from "../../../ProductSlider";

import './HomePage.scss';


export const HomePage = () => {
  const [products] = useState<Product[]>(() => {
    const storedProduct = localStorage.getItem('product');

    return storedProduct ? JSON.parse(storedProduct) : jsonProduct;
  });



  return (
    <div className="home">
    <Carousel />

    <ProductSlider
      products={products}
      filterBy= ''
      title='Hot prices'
    />

    <Category product={products} />

    <ProductSlider
      products={products}
      filterBy= 'year'
      title='Brand new models'
    />
    </div>
  );
}
