import { Product } from "@/types/order";
import styles from './styles.module.scss';

interface Props {
  product: Product;
}

const ProductCardItem = ({ product }: Props) => {
  const { categoryId, name, price, option } = product;

  return (
    <div className={styles.productCard}>
      <p className={styles.productName}>{name}</p>
      <p className={styles.productPrice}>{price.toLocaleString()}원</p>
    </div>
  )
}

export default ProductCardItem;