import { ProductLogic } from "../ProductLogic/ProductLogic";

import { Product } from "../../helpers/Product";

type Props = {
  products: Product[];
}

export const TabletPage: React.FC<Props> = ({products}) => (
    <div className="main">
      <ProductLogic
        products={products}
        category={'tablets'}
        title="Tablets"
       />
    </div>
);

