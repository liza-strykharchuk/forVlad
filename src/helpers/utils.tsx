import { Product } from "./Product";

export const getSortedProducts = (products: Product[], sortBy: string) => {
  switch (sortBy) {
    case 'discount':
      return products.sort((a, b) => {
        const discountA = a.price * (a.discount / 100);
        const discountB = b.price * (b.discount / 100);

        return discountB - discountA;
      });

    case 'age':
      return products.sort((a, b) => a.age - b.age);

    case 'name':
      return products.sort((a, b) => a.name.localeCompare(b.name));

    case 'price':
      return products.sort((a, b) => {
        const finalA = a.price - a.price * (a.discount / 100);
        const finalB = b.price - b.price * (b.discount / 100);

        return finalA - finalB;
      });
    default:
      return products;
  }
};

export const filterProducts = (
  filter: string,
  sortBy: string,
  products: Product[],
) => {
  let filteredProducts = [];

  switch (filter) {
    case 'discount':
      filteredProducts = products.filter(product => product.discount > 0);
      break;

    case 'no-discount':
      filteredProducts = products.filter(product => product.discount === 0);
      break;

    default:
      filteredProducts = products;
  }

  return getSortedProducts(filteredProducts, sortBy);
};
