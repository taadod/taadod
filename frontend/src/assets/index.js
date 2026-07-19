import darkLogo from './darkLogo.webp';
import logo from './logo.webp';
import menuIcon from './menuIcon.svg';
import closeMenu from './closeMenu.svg';
import dummyUserImg from './dummyUserImg.webp';
import heroImg from './heroImg.jpg';

function formatPhone(phone) {
  const cleaned = phone.replace(/\D/g, '');
  return cleaned.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
}

const otherData = {
    phone: '1618832737',
    email: 'admin@rexbid.ie',
    address: 'Ireland',
    phoneCode: '+353',
    brandName: 'RexBid',
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