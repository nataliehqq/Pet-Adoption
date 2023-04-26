import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

//protals for adopt info
const Modal = ({ children }) => {
  // container to get back same thing every time
  const elRef = useRef(null); //I need same div every time
  if (!elRef.current) {
    elRef.current = document.createElement("div"); //be the same div I create
  }

  //handle side-effect
  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elRef.current);

    //remove something form DOM eg. remove event listener
    return () => modalRoot.removeChild(elRef.current);
  }, []); //[] run once onnly

  //<div> need -> since css class require
  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
