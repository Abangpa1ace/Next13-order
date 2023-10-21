import { useOrderStore } from "@/store";
import CartProductController from "./CartProductController";
import CartProductItem from "./CartProductItem";
import styles from './styles.module.scss';

const CartModal = () => {
  const { cartList } = useOrderStore();
  const listTotalPrice = cartList.reduce((acc, product) => acc + product.totalPrice, 0);

  return (
    <aside className={`${styles.cartModal} ${cartList.length && styles.onModal}`}>
      <CartProductController />
      {cartList.map(cartProduct => <CartProductItem product={cartProduct} />)}
      <p className={styles.cartListTotalPrice}>총 {listTotalPrice.toLocaleString()}원</p>
    </aside>
  )
}

export default CartModal;