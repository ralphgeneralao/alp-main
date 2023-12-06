import config from './index';

//soon this will be in a global slice
export const subsites = [
  {
    name: '4-tier Diagnostic Assessment',
    url: config.subsiteUrls.ftd,
    color: '#912B91', // PURPLE
    faded_color: '#F2E6F2', // PURPLE
    short_code: '4TD',
    icon_name: 'subsite-4td',
  },
  {
    name: 'Professional Learning Resources',
    url: config.subsiteUrls.plr,
    color: '#AA2B56', //RED
    faded_color: '#F5E6EB', //RED
    short_code: 'PLR',
    icon_name: 'subsite-plr',
  },
  {
    name: 'Teaching Resources',
    url: config.subsiteUrls.tr,
    color: '#2B8080', //GREEN
    faded_color: '#E6F0F0', //GREEN
    short_code: 'TR',
    icon_name: 'subsite-tr',
  },
  {
    name: 'Student Learning Resources',
    url: config.subsiteUrls.slr,
    color: '#4950DF', //BLUE
    faded_color: '#EDEEFC', //BLUE
    short_code: 'SLR',
    icon_name: 'subsite-slr',
  },
  {
    name: 'Digital and Virtual Resources',
    url: config.subsiteUrls.dvr,
    color: '#FAB570', //YELLOW
    faded_color: '#FFFAF5', //YELLOW
    short_code: 'DVR',
    icon_name: 'subsite-dvr',
  },
];
