import { useOrderStore } from '@/store';
import { useState } from 'react';
import CartDiscountModal from './CartDiscountModal';
import styles from './styles.module.scss';

const CartProductController = () => {
  const selectedProductId = useOrderStore(state => state.selectedProductId);
  const increaseCartProduct = useOrderStore(state => state.increaseCartProduct);
  const decreaseCartProduct = useOrderStore(state => state.decreaseCartProduct);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div>
      <button className={styles.cartControllerButton} onClick={() => setIsOpen(true)}>할인</button>
      <div className={styles.cartControllerCountButtons}>
        <button className={styles.cartControllerButton} onClick={() => decreaseCartProduct(selectedProductId)}>-</button>
        <button className={styles.cartControllerButton} onClick={() => increaseCartProduct(selectedProductId)}>+</button>
      </div>
      <CartDiscountModal isOpen={isOpen} setClose={() => setIsOpen(false)} />
    </div>
  )
}

export default CartProductController;