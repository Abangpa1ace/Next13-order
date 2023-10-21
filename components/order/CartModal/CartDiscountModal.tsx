import Modal from "@/components/shared/modal/Modal";
import { useState } from "react";

interface Props {
  isOpen: boolean;
  setClose: () => void;
}

const CartDiscountModal = ({ isOpen, setClose }: Props) => {
  const [isOpen2, setIsOpen2] = useState<boolean>(false);

  return (
    <Modal isOpen={isOpen} setClose={setClose}>
      <h2>할인정보</h2>
      <button onClick={() => setIsOpen2(true)}>추가할인정보?</button>
      <Modal isOpen={isOpen2} setClose={() => setIsOpen2(false)}>
        <h2>추가할인정보 모달</h2>
      </Modal>
    </Modal>
  )
}

export default CartDiscountModal;