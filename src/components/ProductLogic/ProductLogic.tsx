import React, { useMemo, useState } from 'react';
import Select, {SingleValue, ActionMeta} from 'react-select';

import { Product } from '../../helpers/Product';
import { filterPr, getCategory, getLengthByCategory } from '../../helpers/utils';
import { Phone } from '../Phone/Phone';
import { Pagination } from '../Pagination/Pagination';

import { selectstyle, selectstyle2 } from './ProductLogicStyle';

import './ProductLogic.scss';

type Props = {
  products: Product[];
  category: string;
  title: string;
};

export const ProductLogic: React.FC<Props> = ({
    products,
    category,
    title,
  }) => {
  const isProject = getCategory(products, category);

  const potion = [
    { value: 4, label: '4' },
    { value: 8, label: '8' },
    { value: 16, label: '16' },
    { value: +(products.length), label: 'All' },
  ];

  const categoryToSort = [
    { value: 'year', label: 'Newest' },
    { value: 'alphabetically', label: 'Alphabetically' },
    { value: 'price', label: 'Cheapest' },
  ];

  const [perPage, setPerPage] = useState({ value: 16, label: '16' });
  const [sortCategory, setSortCategory] = useState({ value: 'year', label: 'Newest' });
  const [currentPage, setCurrentPage] = useState(1);

  const handlePage = (numberOfPage: number) => {
    setCurrentPage(numberOfPage);
  };

  const visibleCards = useMemo(() => {
    const newPr = filterPr(products, sortCategory.value);

    const indexOfLastPost = currentPage * perPage.value;
    const indexOfFirstPost = indexOfLastPost - perPage.value;

    const allDone = newPr.slice(indexOfFirstPost, indexOfLastPost);

    return (allDone);
  }, [products, currentPage, sortCategory, perPage]);


  const handleChangeNumber = (
    selectedOption: SingleValue<{ value: number, label: string }>,
    actionMeta: ActionMeta<{ value: number, label: string }>
  ) => {
    if (selectedOption && actionMeta) {
      setPerPage(selectedOption);
      setCurrentPage(1);
    }
  };

  const handleChangeType = (
    selectedOption: SingleValue<{ value: string, label: string }>,
    actionMeta: ActionMeta<{ value: string, label: string }>
  ) => {
    if (selectedOption && actionMeta) {
      setSortCategory(selectedOption);
    }
  };

    return (
      <div className="productsCategory">
        <h1 className="productsCategory__header">
          {title}
        </h1>

        <h2 className="productsCategory__length">
          {`${getLengthByCategory(products, category)} models`}
        </h2>


       {isProject.length > 0 ?(
        <>
        <div className="productsCategory__sortBy--container">
          <div className="productsCategory__sortBy">
            <div className="productsCategory__sortBy--name">Sort by</div>
            <Select
              id="sortCategorySelector"
              className="productsCategory__control"
              options={categoryToSort}
              value={sortCategory}
              onChange={handleChangeType}
              styles={selectstyle}
            />
          </div>

          <div className="productsCategory__sortBy">
            <div className="productsCategory__sortBy--name">Items on page</div>
            <Select
              id="perPageSelector"
              className="productsCategory__control"
              options={potion}
              value={perPage}
              onChange={handleChangeNumber}
              styles={selectstyle2}
            />
          </div>
        </div>

          <ul className="productsCategory__container">
            {visibleCards.map((phone) => (
              <Phone product={phone} key={phone.id}/>
              ))}
          </ul>

        {visibleCards.length !== products.length &&(
        <Pagination
          total={products.length}
          perPage={perPage.value}
          currentPage={currentPage}
          onPageChange={handlePage}
        />
        )}
        </>
        ) : (
          <h2>We currently don't have this product in our store</h2>
        )}
      </div>
    );
  }
