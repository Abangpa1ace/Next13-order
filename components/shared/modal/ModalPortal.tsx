import { PropsWithChildren } from "react";
import ReactDOM from 'react-dom';

const ModalPortal = ({ children }: PropsWithChildren) => {
  const modalRoot = document.getElementById("modal-root");
  console.log(modalRoot?.className);

  return ReactDOM.createPortal(children, modalRoot as Element);
};

export default ModalPortal;