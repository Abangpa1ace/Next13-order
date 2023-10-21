import { PropsWithChildren } from "react";
import ModalPortal from "./ModalPortal";
import styles from './styles.module.scss';

interface Props {
  isOpen: boolean;
  setClose: () => void;
}

const Modal = ({ children, isOpen, setClose }: PropsWithChildren<Props>) => {
  if (!isOpen) return null;
  
  return (
    <ModalPortal>
      <div className={styles.dim}>
        <div className={styles.box}>
          <button className={styles.closeButton} onClick={setClose}>X</button>
          {children}
        </div>
      </div>
    </ModalPortal>
  )
}

export default Modal