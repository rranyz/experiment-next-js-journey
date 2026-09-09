import classes from "./Modal.module.css";
import type React from "react";
import { useNavigate } from "react-router";

interface ModalProps {
  // onClose: React.MouseEventHandler<HTMLDivElement>;
}

function Modal({ children }: React.PropsWithChildren<ModalProps>) {
  const navigate = useNavigate();

  function onClose() {
    navigate("..");
  }

  return (
    <>
      <div className={classes.backdrop} onClick={onClose} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}

export default Modal;
