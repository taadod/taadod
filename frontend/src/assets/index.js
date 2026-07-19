import darkLogo from './darkLogo.webp';
import logo from './logo.webp';
import menuIcon from './menuIcon.svg';
import closeMenu from './closeMenu.svg';
import heroImg from './heroImg.webp';

function formatPhone(phone) {
  const cleaned = phone.replace(/\D/g, '');
  return cleaned.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
}

const otherData = {
    phone: '33402288',
    email: 'info@taadod.org',
    address: 'Qatar',
    phoneCode: '+974',
    brandName: 'Taadod',
    formatPhone
}

export {
    otherData,
    darkLogo,
    logo,
    menuIcon,
    closeMenu,
    heroImg,
};