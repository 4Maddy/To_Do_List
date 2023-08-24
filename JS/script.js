const input = document.querySelector('.input_item');
const button = document.querySelector('.btn_add_item');

const validateInput = ({ target }) => {
    if (target.value.length > 3) {
      button.removeAttribute('disabled');
      return;
    }
  
    button.setAttribute('disabled', '');
  }

input.addEventListener('input', validateInput);
