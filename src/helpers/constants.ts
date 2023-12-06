import config from '../config';

export const phoneRegEx =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const usernameRegex = /^[a-zA-Z0-9_]*$/;

export const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[_@#$%^&+=!?]).{8,}$/;

export const noWhiteSpaceRegex = /^\S+$/;

export const numberOnlyRegex = /^[0-9]*$/;

export const validStringRegex = /^(?!.*\s{2,})(?!^ )[0-9A-Za-z\s]{2,50}$/;

//this will probably be replaced with data from api soon
export const countries = [
  { displayName: 'New South Wales', value: 'New South Wales' },
  { displayName: 'Queensland', value: 'Queensland' },
  { displayName: 'Northern Territory', value: 'Northern Territory' },
  { displayName: 'Western Australia', value: 'Western Australia' },
  { displayName: 'South Australia', value: 'South Australia' },
  { displayName: 'Victoria', value: 'Victoria' },
  { displayName: 'Australian Capital Territory', value: 'Australian Capital Territory' },
  { displayName: 'Tasmania', value: 'Tasmania' },
];

//license hashmap
export const licenseDetails = new Map();
licenseDetails.set('AH', {
  badge: 'Account Holder',
  icon: 'student',
});
licenseDetails.set('MA', {
  badge: 'Master Admin',
  icon: 'supervisor',
});
licenseDetails.set('SL', {
  badge: 'Student License',
  icon: 'student',
});
licenseDetails.set('SV', {
  badge: 'Supervisor',
  icon: 'supervisor',
});
licenseDetails.set('SUB', {
  badge: 'Subscriber',
  icon: 'subscriber',
});
licenseDetails.set('LNS', {
  badge: 'Teacher License',
  icon: 'supervisor',
});

//subsite Themes hashmap
export const subsiteThemes = new Map();
subsiteThemes.set('TR', {
  color: 'green',
});
subsiteThemes.set('4TD', {
  color: 'red',
});
subsiteThemes.set('PLR', {
  color: 'red',
});
subsiteThemes.set('DVR', {
  color: 'yellow',
});
subsiteThemes.set('SLR', {
  color: 'blue',
});
subsiteThemes.set('HOME', {
  color: 'gray',
});
subsiteThemes.set('SAS', {
  color: 'black',
});
subsiteThemes.set('TAR', {
  color: 'purple',
});

//subsite URLS
export const subsiteUrls = new Map();
subsiteUrls.set('TR', {
  url: config.subsiteUrls.tr,
});
subsiteUrls.set('4TD', {
  url: config.subsiteUrls.ftd,
});
subsiteUrls.set('PLR', {
  url: config.subsiteUrls.plr,
});
subsiteUrls.set('DVR', {
  url: config.subsiteUrls.dvr,
});
subsiteUrls.set('SLR', {
  url: config.subsiteUrls.slr,
});
subsiteUrls.set('ADMIN', {
  url: config.subsiteUrls.admin,
});
