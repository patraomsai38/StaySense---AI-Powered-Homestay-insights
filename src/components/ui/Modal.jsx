import { useEffect } from "react";

/**
 * Modal Component
 * Props:
 * - isOpen
 * - onClose
 * - title
 * - children
 */

function Modal({ isOpen, onClose, title, children }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEsc);

    return () =>
      document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">

      <div className="bg-white p-6 rounded-lg w-96">

        <div className="flex justify-between mb-4">
          <h2 className="font-bold text-xl">
            {title}
          </h2>

          <button onClick={onClose}>
            ✖
          </button>
        </div>

        {children}
      </div>
    </div>
  );
}

export default Modal;