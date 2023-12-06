export default {
  subsiteCode: 'MAIN',
  environment: import.meta.env.MODE || 'development',
  baseApiUrl: import.meta.env.VITE_GRAPHQL_API_URI || '',
  auth: {
    xTokenKey: import.meta.env.VITE_TOKEN_KEY || 'x-token',
    rTokenKey: import.meta.env.VITE_REFRESH_TOKEN_KEY || 'r-token',
    cookieKey: import.meta.env.AUTH_COOKIE_KEY || 'd0f70dbf2f9a2124a2fc57920967aaf069aaabeb',
  },
  subsiteUrls: {
    main: import.meta.env.VITE_MAIN_SITE_URL || 'https://main.alearningplace.com.au/',
    slr: import.meta.env.VITE_SLR_SITE_URL || 'https://slr.alearningplace.com.au/',
    dvr: import.meta.env.VITE_DVR_SITE_URL || 'https://dvr.alearningplace.com.au/',
    ftd: import.meta.env.VITE_4TD_SITE_URL || 'https://4td.alearningplace.com.au/',
    tr: import.meta.env.VITE_TR_SITE_URL || 'https://tr.alearningplace.com.au/',
    plr: import.meta.env.VITE_PLR_SITE_URL || 'https://plr.alearningplace.com.au/',
    admin: import.meta.env.VITE_ADMIN_SITE_URL || 'https://admin.alearningplace.com.au/',
  },
  pageBuilderUrls: {
    main: 'https://relationalmathematics.com.au',
  },
  canaryUrls: {
    tr: 'https://tr.alearningplace.local/subscription/tr/mysubscriptions',
  },
};
