import React from "react";
import { Link } from "react-router-dom";

import "./Phone.scss";

import { Product } from "../../helpers/Product";

type Props = {
  product: Product;
};


export const Phone: React.FC<Props> = ({product}) => {
  const {
    id,
    image,
    name,
    price,
    fullPrice,
    screen,
    capacity,
    ram,
    category,
  } = product;

  return (
    <li
    className='phone'
  >
    <Link to={`/${category}/${id}`}>
      <img
          src={` https://mate-academy.github.io/react_phone-catalog/_new/${image}`}
          alt={name}
          className='phone__img'
      />

      <div className="phone__name">
      {name}
      </div>
    </Link>

    <div className="phone__cost">
        <div className="phone__cost--discount">
        {`$${price}`}
        </div>

        <div className="phone__cost--real">
        {`$${fullPrice}`}
        </div>
    </div>

    <div className="phone__criteria">
        <div className="phone__criteria--container">
            <div
            className="
              phone__criteria--screen-n
              phone__criteria--big
            "
            >
            Screen
            </div>
            <div
            className="
              phone__criteria--screen-f
              phone__criteria--small
            "
            >
            {screen}
            </div>
        </div>

        <div className="phone__criteria--container">
        <div
            className="
            phone__criteria--capacity-n
            phone__criteria--big
            "
        >
            Capacity
        </div>
        <div
            className="
            phone__criteria--capacity-f
            phone__criteria--small
            "
        >
            {capacity}
        </div>
        </div>

        <div className="phone__criteria--container">
        <div
            className="
            phone__criteria--ram-n
            phone__criteria--big
            "
            >
            Ram
        </div>
        <div
            className="
            phone__criteria--ram-f
            phone__criteria--small
            "
            >
            {ram}
        </div>
        </div>
    </div>

    <div className="phone__button">
        <button className="phone__button--add">
        Add to cart
        </button>

        <button className="phone__button--like" />
    </div>
  </li>
  );
}
