import AlpLogo from '../assets/img/alp_logo.svg';
import PersonalAccountBanner from '../assets/img/personal_account_banner.svg';
import SchoolAccountBanner from '../assets/img/school_account_banner.svg';
import UserSuccessImg from '../assets/img/user_success.svg';
import SuccessImg from '../assets/img/success_new_design.svg';
import EmailSuccessImg from '../assets/img/email_success_new_design.svg';
import AlpLogoNoText from '../assets/img/alp_logo_login_notext.svg';
import MobileSuccessImg from '../assets/img/mobile_success.svg';
import AlpLogoSpinningGif from '../assets/img/alp_logo_spinning.gif';
import AlpLogoSpinningThinkingGif from '../assets/img/alp_logo_spinning_thinking.gif';
import AlpLogoSpinningSmileGif from '../assets/img/alp_logo_spinning_smile.gif';
import AlpLogoSpinningThinkingGif2 from '../assets/img/alp_logo_spinning_thinking_2.gif';
import AlpHomepageTRCardGif from '../assets/img/alp_homepage_tr_card.gif';
import AlpHomepageSLRCardGif from '../assets/img/alp_homepage_slr_card.gif';
import AlpHomepage4RDACardGif from '../assets/img/alp_homepage_4tda_card.gif';
import AlpLogoSpinningTransparentGif from '../assets/img/alp_logo_spinning_transparent.gif'

const imagesToPreload = [
  AlpLogo,
  PersonalAccountBanner,
  SchoolAccountBanner,
  UserSuccessImg,
  SuccessImg,
  EmailSuccessImg,
  AlpLogoNoText,
  MobileSuccessImg,
  AlpLogoSpinningGif,
  AlpLogoSpinningThinkingGif,
  AlpLogoSpinningSmileGif,
  AlpLogoSpinningThinkingGif2,
  AlpHomepageTRCardGif,
  AlpHomepageSLRCardGif,
  AlpHomepage4RDACardGif,
  AlpLogoSpinningTransparentGif
];

//this will preload all necessary images so that they will be
//available rightaway once needed
export const preloadImages = () => {
  imagesToPreload.forEach((img) => (new Image().src = img));
};

export {
  AlpLogo,
  PersonalAccountBanner,
  SchoolAccountBanner,
  UserSuccessImg,
  SuccessImg,
  EmailSuccessImg,
  AlpLogoNoText,
  MobileSuccessImg,
  AlpLogoSpinningGif,
  AlpLogoSpinningThinkingGif,
  AlpLogoSpinningSmileGif,
  AlpLogoSpinningThinkingGif2,
  AlpHomepageTRCardGif,
  AlpHomepageSLRCardGif,
  AlpHomepage4RDACardGif,
  AlpLogoSpinningTransparentGif
};
