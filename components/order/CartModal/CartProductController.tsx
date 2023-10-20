import useOrderStore from '@/store/useOrderStore';
import styles from './styles.module.scss';

const CartProductController = () => {
  const selectedProductId = useOrderStore(state => state.selectedProductId);
  const increaseCartProduct = useOrderStore(state => state.increaseCartProduct);
  const decreaseCartProduct = useOrderStore(state => state.decreaseCartProduct);

  return (
    <div>
      <button className={styles.cartControllerButton}>할인</button>
      <div className={styles.cartControllerCountButtons}>
        <button className={styles.cartControllerButton} onClick={() => decreaseCartProduct(selectedProductId)}>-</button>
        <button className={styles.cartControllerButton} onClick={() => increaseCartProduct(selectedProductId)}>+</button>
      </div>
    </div>
  )
}

export default CartProductController;