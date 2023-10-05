import React, { useState} from 'react';

import { Product } from '../helpers/Product';

import './HotPrices.scss'

type Props = {
  products: Product[];
};

enum Direction {
  PREV = 'prev',
  NEXT = 'next',
}

const sliderSettings = {
  containerWidth: 1040,
  cardWidth: 272,
  cardGap: 16,
  cardsPerPage: 4,
};


export const HotPrices: React.FC<Props> = ({
  products
}) => {
  const {
    cardWidth,
    cardGap,
    cardsPerPage,
  } = sliderSettings;

  const [lastVisibleCard, setLastVisibleCard] = useState(cardsPerPage);


  const scroll = -(lastVisibleCard - cardsPerPage) * (cardWidth + cardGap);
  const styles = {
    transform: `translateX(${scroll}px)`,
    transition: 'transform 0.5s',
  };

  const totalCards = products.length;

  const handleCardsChange = (direction: Direction) => {
    let newCard;

    if (direction === Direction.NEXT) {
      newCard = lastVisibleCard + 1;

      if (newCard > totalCards) {
        newCard = totalCards;
      }
    } else {
      newCard = lastVisibleCard - 1;

      if (newCard < cardsPerPage) {
        newCard = cardsPerPage;
      }
    }

    setLastVisibleCard(newCard);
  };

  const filterProduct = products.filter(phone => phone.discount > 0);

  const productDiscounts = filterProduct.map(item => ({
    ...item,
    productDiscount: item.price * ((100 - item.discount) / 100)
  }));


  return (
    <div className="hotPrices">
      <div className="hotPrices__container--header">
      <div className="hotPrices__header">
        Hot prices
      </div>

      <div className="ProductsSlider__buttons">
          <button
            type="button"
            className={`sliderButton sliderButton--${Direction.PREV}`}
            onClick={() => {
              handleCardsChange(Direction.PREV);
            }}
            disabled={lastVisibleCard === cardsPerPage}
          >
            {' '}
          </button>

          <button
            type="button"
            className={`sliderButton sliderButton--${Direction.NEXT}`}
            onClick={() => {
              handleCardsChange(Direction.NEXT);
            }}
            disabled={lastVisibleCard === totalCards}
          >
            {' '}
          </button>
        </div>
      </div>

      <div className="hotPrices__container">
        {productDiscounts.map((phone) =>{
          <div
            className="hotPrices__phone"
            key={phone.id}
            style={styles}
          >
            <img
              src={phone.imageUrl}
              alt={phone.name}
              className='hotPrices__img'
            />

              <div className="hotPrices__name">
                {phone.name}
              </div>

            <div className="hotPrices__cost">
              <div className="hotPrices__cost--discount">
                {phone.productDiscount}
              </div>

              <div className="hotPrices__cost--real">
                {phone.price}
              </div>
            </div>

            <div className="hotPrices__criteria">
              <div className="hotPrices__criteria--screen">
                  <div
                    className="
                      hotPrices__criteria--screen-n
                      hotPrices__criteria--big
                    "
                  >
                    Screen
                  </div>
                  <div
                    className="
                      hotPrices__criteria--screen-f
                      hotPrices__criteria--small
                    "
                    >
                    {phone.screen}
                  </div>
                </div>

              <div className="hotPrices__criteria--capacity">
                <div
                  className="
                    hotPrices__criteria--capacity-n
                    hotPrices__criteria--big
                  "
                >
                  Capacity
                </div>
                <div
                  className="
                    hotPrices__criteria--capacity-f
                    hotPrices__criteria--small
                  "
                >
                  {phone.capacity}
                </div>
              </div>

              <div className="hotPrices__criteria--ram">
                <div
                  className="
                    hotPrices__criteria--ram-n
                    hotPrices__criteria--big
                    "
                  >
                  ram
                </div>
                <div
                  className="
                    hotPrices__criteria--ram-f
                    hotPrices__criteria--small
                    "
                  >
                  {phone.ram}
                </div>
              </div>
            </div>

            <div className="hotPrices__button">
              <button className="hotPrices__button--add">
                Add to cart
              </button>

              <button className="hotPrices__button--like" />
            </div>
          </div>
        })}
      </div>
    </div>
  );
}
