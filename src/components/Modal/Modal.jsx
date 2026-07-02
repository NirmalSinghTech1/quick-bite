import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

function Modal({ open, children, title, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const modal = dialogRef.current;
    if (!modal) return;

    if (open) {
      if (!modal.open) {
        modal.showModal();

        document.body.style.overflow = "hidden";
      }
    }

    return () => {
      document.body.style.overflow = "unset";
      modal.close();
    };
  }, [open]);

  const handleCancel = (event) => {
    event.preventDefault();

    onClose();
  };

  return createPortal(
    <dialog
      id="cart-modal"
      ref={dialogRef}
      onClose={onClose}
      onCancel={handleCancel}
      className="fixed m-auto inset-0 w-lg rounded-lg backdrop:bg-black/50 animate-[SlideIn_0.4s_ease-out]"
    >
      <div className="font-raleway text-gray-800 bg-amber-50 p-4 py-6 flex flex-col gap-3 font-medium">
        <h3 className="font-bold font-manrope text-lg text-gray-950">
          {title}
        </h3>
        {children}
      </div>
    </dialog>,
    document.getElementById("modal"),
  );
}

export default Modal;
