import useOrderStore from "@/store/useOrderStore";
import { Product } from "@/types/order";
import styles from './styles.module.scss';

interface Props {
  product: Product;
}

const ProductItem = ({ product }: Props) => {
  const addCartProduct = useOrderStore(state => state.addCartProduct);
  const { name, price } = product;

  return (
    <div className={styles.productCard} onClick={() => addCartProduct(product)}>
      <p className={styles.productName}>{name}</p>
      <p className={styles.productPrice}>{price.toLocaleString()}원</p>
    </div>
  )
}

export default ProductItem;