import { useEffect, useState } from 'react';

const useTogglePlanerForm = () => {
  const [plannerForm, setPlannerForm] = useState(false);

  useEffect(() => {
    if (plannerForm === true) {
      return window.addEventListener('keydown', onClose);
    }

    if (plannerForm === false) {
      return window.removeEventListener('keydown', onClose);
    }
  }, [plannerForm]);

  const onClose = (event) => {
    if (event.keyCode === 27) {
      setPlannerForm(false);
      return;
    }

    if (event.currentTarget.id === 'closeForm-button') {
      return setPlannerForm(false);
    }

    return;
  };

  return [plannerForm, setPlannerForm];
};

export { useTogglePlanerForm };
