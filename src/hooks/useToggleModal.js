import { useEffect, useState } from 'react';

const useToggleModal = () => {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (modalOpen === true) {
      return window.addEventListener('keydown', onClose);
    }

    if (modalOpen === false) {
      return window.removeEventListener('keydown', onClose);
    }
  }, [modalOpen]);

  const onClose = (event) => {
    if (event.keyCode === 27) {
      setModalOpen(false);

      return;
    }

    if (event.currentTarget.id === 'closeModal-button') {
      return setModalOpen(false);
    }

    return;
  };

  return [modalOpen, setModalOpen];
};

export { useToggleModal };
