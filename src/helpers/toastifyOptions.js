import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

function toastifyOptions(name, text) {
  switch (name) {
    case 'error':
      return {
        text: text,
        className: 'error',
        stopOnFocus: true,
        autoClose: 9000,
        style: {
          background: 'rgba(255, 255, 255, 0.3)',
          backdropFilter: 'blur(20px)',
          boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 6px',
          color: 'rgb(36, 36, 36)',
          borderRadius: '30px',
        },
      };
    case 'info':
      return {
        text: text,
        className: 'info',
        stopOnFocus: true,
        autoClose: 9000,
        style: {
          background: 'rgba(197, 252, 34, 0.4)',
          backdropFilter: 'blur(20px)',
          boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 6px',
          color: 'rgb(36, 36, 36)',
          borderRadius: '30px',
        },
      };

    default:
      break;
  }
}

export default toastifyOptions;
