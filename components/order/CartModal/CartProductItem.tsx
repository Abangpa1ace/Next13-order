import useOrderStore from "@/store/useOrderStore";
import { CartProduct } from "@/types/order";
import { MouseEvent } from "react";
import styles from './styles.module.scss';

interface Props {
  product: CartProduct;
}

const CartProductItem = ({ product }: Props) => {
  const { id, name, price, count, totalPrice } = product;
  const removeCartProduct = useOrderStore(state => state.removeCartProduct);
  const selectedProductId = useOrderStore(state => state.selectedProductId);
  const setSelectedProductId = useOrderStore(state => state.setSelectedProductId);

  const handleClickRemoveButton = (e: MouseEvent) => {
    e.stopPropagation();
    removeCartProduct(id);
  }

  return (
    <article className={`${styles.cartItem} ${id === selectedProductId && styles.selectedItem}`} onClick={() => setSelectedProductId(id)}>
      <button className={styles.cartItemCloseButton} onClick={handleClickRemoveButton}>X</button>
      <>
        <p className={`${styles.cartItemContent} ${styles.cartItemMainInfo}`}>
          <span>{name} x{count}</span>
          <span>{(price * count).toLocaleString()}원</span>
        </p>
      </>
      <p className={styles.cartItemTotalPrice}>
        총 {totalPrice.toLocaleString()}원
      </p>
    </article>
  )
}

export default CartProductItem;