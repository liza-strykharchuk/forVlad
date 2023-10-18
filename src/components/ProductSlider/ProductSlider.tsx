import React, { useState, useMemo} from 'react';

import cn from 'classnames';

import { Product } from '../../helpers/Product';
import { Phone } from '../Phone/Phone';
import { filterPr } from '../../helpers/utils';

import './ProductSlider.scss'

type Props = {
  products: Product[];
  filterBy: string;
  title: string;
};

export const ProductSlider: React.FC<Props> = ({
  products,
  filterBy,
  title,
}) => {
  const [startIndex, setStartIndex] = useState(0);

  const handlePrevClick = () => {
    setStartIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNextClick = () => {
    setStartIndex((prev) => Math.min(
      prev + 1, products.length - 4,
    ));
  };

  const visibleCards = useMemo(() => {
    const newPr = filterPr(products, filterBy)
    return newPr.slice(startIndex, startIndex + 4);
  }, [products, startIndex]);

  const prevDisables = startIndex === 0;
  const nextDisables = startIndex === products.length - 4;

  return (
    <div className="products">
      <div className="products__container--header">
        <h1 className="products__header">
          {title}
        </h1>

        <div>
              <button
                type="button"
                onClick={handlePrevClick}
                disabled={prevDisables}
                className={cn('sliderButton sliderButton--prev', {
                  disabled: prevDisables,
                })}
              >
                {' '}
              </button>
              <button
                type="button"
                onClick={handleNextClick}
                disabled={nextDisables}
                className={cn('sliderButton sliderButton--next', {
                  disabled: nextDisables,
                })}
              >
                {' '}
              </button>
            </div>
          </div>

    <ul className="products__container">
      {visibleCards.map((phone) => (
         <Phone product = {phone} key={phone.id}/>
        ))}
      </ul>
    </div>
  );
}
