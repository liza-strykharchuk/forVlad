import React from "react";

import { Product } from "../../helpers/Product";

import './Category.scss';

type Props = {
  product: Product[]
}

export const Category: React.FC<Props> = ({product}) => {
  const getLengthByCategory = (arr: Product[], category: string) => {
    return arr.filter(product => product.category === category).length;
  };

  return (
    <div className="category">
      
      <div className="category__header">
        Shop by category
      </div>

      <div className="category__container">
        <div className="category__phone">
          <div className="category__phone--img category__img"></div>
            <div className="category__title">
              Mobile phones
            </div>
              <div className="category__phone--name">
              {getLengthByCategory(product, 'phones') }
                {' '}
              models
            </div>
        </div>

        <div className="category__tablets">
         <div className="category__tablets--img category__img"></div>
            <div className="category__title">
              Tablets
            </div>
           <div className="category__tablets--name">
            {getLengthByCategory(product, 'tablets') }
              {' '}
              models
            </div>
        </div>

        <div className="category__accessories">
          <div className="category__accessories--img category__img"></div>
            <div className="category__title">
            Accessories
            </div>
           <div className="category__accessories--name">
            {getLengthByCategory(product, 'accessories') }
              {' '}
              models
            </div>
        </div>
      </div>
    </div>

  );
}

