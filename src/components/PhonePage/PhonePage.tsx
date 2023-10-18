import { ProductLogic } from "../ProductLogic/ProductLogic";

import { Product } from "../../helpers/Product";

type Props = {
  products: Product[];
}

export const PhonePage: React.FC<Props> = ({products}) => (
    <div className="main">
      <ProductLogic
        products={products}
        category={'phones'}
        title="Mobile phones"
       />
    </div>
);
