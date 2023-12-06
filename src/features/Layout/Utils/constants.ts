import config from '../../../config';

export const menuItems = [
  {
    displayName: 'Home',
    urlPath: `${config.subsiteUrls.tr}`,
    defaultSelected: true,
    isProtected: false,
    chainUrls: [
      // 'login',
      // 'createaccount',
      // 'createaccount/personal/0',
      // 'createaccount/school/0',
      // 'login/forgotpassword',
      // 'accountretrieval/requestaccountcredentials',
      // 'accountretrieval/requestresetpassword',
      '',
    ],
  },
  {
    displayName: 'Teaching Resources',
    urlPath: `${config.subsiteUrls.tr}/dashboard/tr`,
    isProtected: true,
  },
  {
    displayName: 'Browse free resources',
    urlPath: `${config.pageBuilderUrls.main}/free-resources`,
    isProtected: true,
  },
];

export const menuItemsNotSubscribed = [
  {
    displayName: 'Home',
    urlPath: '/',
    isProtected: false,
    hideAfterLogin: false,
    defaultSelected: true,
    chainUrls: [],
  },
  {
    displayName: 'My Account',
    urlPath: `${config.subsiteUrls.tr}/subscription/tr`,
    sideMenuId: 'myaccount',
    isProtected: true,
    hasSidebar: true,
  },
];

export const menuItemsNotVerified = [
  {
    displayName: 'Home',
    urlPath: '/',
    isProtected: false,
    hideAfterLogin: false,
    defaultSelected: true,
    chainUrls: [],
  },
];

//soon this will be in a global slice
export const subsites = [
  {
    name: 'Teaching Resources',
    // url: config.subsiteUrls.tr,
    url: `${config.pageBuilderUrls.main}/teaching-resources`,
    short_code: 'TR',
  },
  {
    name: '4-Tier Diagnostic Assessment Tool',
    // url: config.subsiteUrls.ftd,
    url: `${config.pageBuilderUrls.main}/4-tier-diagnostic-assessment`,
    short_code: '4TD',
  },
  {
    name: 'A Learning Place <br />A Teaching Place',
    url: `${config.pageBuilderUrls.main}/relational-understanding`,
    short_code: 'ALPATP',
  },
  {
    name: 'Student Learning Resources',
    // url: config.subsiteUrls.slr,
    url: `${config.pageBuilderUrls.main}/student-learning-resources`,
    short_code: 'SLR',
  },
  {
    name: 'Student Tracking & Reporting',
    // url: config.subsiteUrls.plr,
    url: `${config.pageBuilderUrls.main}/tracking-and-reporting`,
    short_code: 'PLR',
  },
  {
    name: 'Digital & Virtual Resources',
    // url: config.subsiteUrls.dvr,
    url: `${config.pageBuilderUrls.main}/digital-resources`,
    short_code: 'DVR',
  },
];

export const sitepages = [
  // {
  //   name: 'My Account',
  //   url: '',
  // },
  // {
  //   name: 'Membership',
  //   url: '',
  // },
  {
    name: 'About / Contact',
    url: `${config.pageBuilderUrls.main}/about-contact`,
  },
  {
    name: 'Terms & Conditions',
    url: 'agreement/termsandconditions',
  },
  {
    name: 'Privacy Policy',
    url: 'agreement/privacypolicy',
  },
];

export const footerSubsites = [
  {
    name: 'Homepage',
    url: '/',
    short_code: 'HOME',
  },
  {
    name: 'Teaching Resources',
    url: config.subsiteUrls.tr,
    short_code: 'TR',
  },
  {
    name: 'Scope & Sequences',
    url: `${config.pageBuilderUrls.main}/scope-sequences`,
    short_code: 'SAS',
  },
  {
    name: 'Student Learning Resources',
    // url: config.subsiteUrls.slr,
    url: `${config.pageBuilderUrls.main}/student-learning-resources`,
    short_code: 'SLR',
  },
  {
    name: 'Tracking & Reporting',
    url: `${config.pageBuilderUrls.main}/tracking-and-reporting`,
    short_code: 'TAR',
  },
  {
    name: '4-Tier Diagnostic Assessment',
    // url: config.subsiteUrls.ftd,
    url: `${config.pageBuilderUrls.main}/4-tier-diagnostic-assessment`,
    short_code: '4TD',
  },
  {
    name: 'Digital Resources',
    url: `${config.pageBuilderUrls.main}/digital-resources`,
    short_code: 'DVR',
  },
];

export const socmed = [
  {
    icon: 'alp-fb',
    url: 'https://www.facebook.com/alearningplaceateachingplace',
  },
  // {
  //   icon: 'alp-linkedin',
  //   url: '#',
  // },
  {
    icon: 'alp-instagram',
    url: 'https://www.instagram.com/alearningplaceateachingplace/',
  },
  // {
  //   icon: 'alp-youtube',
  //   url: '#',
  // },
];

export const footerPages = [
  {
    displayName: 'Look Around',
    urlPath: `${config.pageBuilderUrls.main}/look-around`,
    isProtected: false,
  },
  {
    displayName: 'Relational Mathematics',
    urlPath: `${config.pageBuilderUrls.main}/relational-understanding`,
    isProtected: false,
  },
  {
    displayName: 'Research-base',
    urlPath: `${config.pageBuilderUrls.main}/research-base`,
    isProtected: false,
  },
  {
    displayName: 'Some PL',
    urlPath: `${config.pageBuilderUrls.main}/professional-learning`,
    isProtected: false,
  },
];

export const sidemenuItems = [
  {
    sideMenuId: 'dashboard',
    pathname: ['dashboard', 'supervisors', 'notifications'],
    items: [
      {
        displayName: 'Teaching Resources',
        urlPath: 'dashboard/tr',
        icon: 'TR',
        isTextIcon: true,
        hasResourceFilter: true,
        chainUrls: ['dashboard/tr/scopeandsequence', 'dashboard/tr/ultimatepage/page', 'dashboard/tr/zonepage/page'],
      },
      {
        displayName: 'Supervisors',
        urlPath: 'supervisors',
        icon: 'supervisor',
      },
      {
        displayName: 'Notifications',
        urlPath: 'notifications',
        icon: 'bell',
      },
    ],
  },
  {
    sideMenuId: 'myaccount',
    pathname: ['subscription', 'licenses'],
    items: [
      {
        displayName: 'Subscription Management',
        urlPath: 'subscription/tr',
        mainPath: 'subscription',
        icon: 'money',
        isCollapsed: true,
        submenu: [
          {
            displayName: 'Create a Subscription',
            urlPath: 'subscription/tr',
            chainUrls: [
              'subscription/tr/checkout',
              'subscription/tr/payment',
              'subscription/tr/personal',
              'subscription/tr/school',
              'subscription/tr/paymentdetails',
            ],
          },
          {
            displayName: 'My Subscriptions',
            urlPath: 'subscription/tr/mysubscriptions',
            chainUrls: [
              'subscription/tr/subscriptioninfo',
              'subscription/tr/managelicenses',
              'subscription/tr/addlicences',
              'subscription/tr/renew',
              'subscription/tr/activatelicence',
              'subscription/tr/renewpaymentdetails',
            ],
          },
          {
            displayName: 'Invoices',
            urlPath: 'subscription/tr/invoices',
          },
          // {
          //   displayName: 'Pending Payments',
          //   urlPath: 'subscription/pendingpayments',
          //   badgeId: 'pendingpayment',
          // },
        ],
      },
      {
        displayName: 'Licenses',
        urlPath: 'licenses',
        icon: 'key',
      },
    ],
  },
];

export const sideItems = [
  {
    sideMenuId: 'sidebar',
    pathname: ['dashboard', 'supervisors', 'notifications', 'subscription', 'licenses'],
    items: [
      {
        displayName: 'Teaching Resources',
        urlPath: config.subsiteUrls.tr,
        icon: 'TRs',
        isTextIcon: true,
      },
      {
        displayName: `What's New?`,
        urlPath: `${config.pageBuilderUrls.main}/whats-new`,
        icon: 'star',
      },
      // {
      //   displayName: 'My Notifications',
      //   // urlPath: window.location.pathname.substring(1),
      //   icon: 'comment',
      // },
      // {
      //   displayName: 'My Account',
      //   // urlPath: 'subscription/*',
      //   icon: 'circle-user',
      //   sideMenuId: 'myaccount',
      //   hasSidebar: true,
      // },
      {
        displayName: 'Scope & Sequences',
        urlPath: `${config.pageBuilderUrls.main}/scope-sequences`,
        icon: 'S&S',
        isTextIcon: true,
      },
      {
        displayName: 'Concept Zone Sequences',
        urlPath: `${config.subsiteUrls.tr}/dashboard/tr/scopeandsequence`,
        icon: 'zcs',
        isTextIcon: true,
      },
      {
        displayName: 'Research',
        urlPath: `${config.pageBuilderUrls.main}/research-base`,
        icon: 'book-open',
      },
      {
        displayName: 'TPL',
        urlPath: `${config.pageBuilderUrls.main}/professional-learning`,
        icon: 'screen-users',
      },
      {
        displayName: 'Contact Us',
        urlPath: `${config.pageBuilderUrls.main}/about-contact`,
        icon: 'envelope',
      },
    ],
  },
];

export const sideItemsNotSubscribed = [
  {
    sideMenuId: 'sidebar',
    pathname: ['dashboard', 'supervisors', 'notifications', 'subscription', 'licenses', ''],
    items: [
      {
        displayName: `What's New?`,
        // urlPath: window.location.pathname.substring(1),
        icon: 'star',
      },
      // {
      //   displayName: 'My Notifications',
      //   // urlPath: window.location.pathname.substring(1),
      //   icon: 'comment',
      // },
      // {
      //   displayName: 'My Account',
      //   urlPath: 'subscription/*',
      //   icon: 'circle-user',
      //   sideMenuId: 'myaccount',
      //   hasSidebar: true,
      // },
      {
        displayName: 'Scope & Sequences',
        urlPath: `${config.pageBuilderUrls.main}/scope-sequences`,
        icon: 'S&S',
        isTextIcon: true,
      },
      {
        displayName: 'Concept Zone Sequences',
        // urlPath: '',
        icon: 'zcs',
        isTextIcon: true,
      },
      {
        displayName: 'Research',
        urlPath: `${config.pageBuilderUrls.main}/research-base`,
        icon: 'book-open',
      },
      {
        displayName: 'TPL',
        // urlPath: '',
        icon: 'screen-users',
      },
      {
        displayName: 'Contact Us',
        urlPath: `${config.pageBuilderUrls.main}/about-contact`,
        icon: 'envelope',
      },
    ],
  },
];

export const sidemenuItem = [
  {
    sideMenuId: 'myaccount',
    pathname: ['subscription', 'licenses'],
    items: [
      {
        displayName: 'Subscription Management',
        urlPath: 'subscription/tr',
        mainPath: 'subscription',
        icon: 'money',
        isCollapsed: true,
        submenu: [
          {
            displayName: 'Create a Subscription',
            urlPath: 'subscription/tr',
            chainUrls: [
              'subscription/tr/checkout',
              'subscription/tr/payment',
              'subscription/tr/personal',
              'subscription/tr/school',
              'subscription/tr/paymentdetails',
            ],
          },
          {
            displayName: 'My Subscriptions',
            urlPath: 'subscription/tr/mysubscriptions',
            chainUrls: [
              'subscription/tr/subscriptioninfo',
              'subscription/tr/managelicenses',
              'subscription/tr/addlicences',
              'subscription/tr/renew',
              'subscription/tr/activatelicence',
              'subscription/tr/renewpaymentdetails',
            ],
          },
          {
            displayName: 'Invoices',
            urlPath: 'subscription/tr/invoices',
          },
          // {
          //   displayName: 'Pending Payments',
          //   urlPath: 'subscription/pendingpayments',
          //   badgeId: 'pendingpayment',
          // },
        ],
      },
      // {
      //   displayName: 'Licenses',
      //   urlPath: 'licenses',
      //   icon: 'key',
      // },
    ],
  },
];
