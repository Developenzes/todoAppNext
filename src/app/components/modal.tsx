type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal = ({ open, onClose, children }: ModalProps) => {
  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 flex justify-center items-center transition-color z-10 p-4 ${
        open ? "visible bg-black/30" : "invisible"
      }`}
    >
      {children}
    </div>
  );
};

export default Modal;
