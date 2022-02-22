// Phone Mask for valid phone number Маска для номера телефона - Start -

import IMask from 'imask';

const initIMask = () => {
  const phoneInput01 = document.getElementById('phone-01');
  if (phoneInput01) {
    const phoneMask01 = IMask(phoneInput01, {
      mask: '+{7}(000)000-00-00',
    });
  }
};
export {initIMask};
// Phone Mask for valid phone number Маска для номера телефона - Finish -
