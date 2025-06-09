// Cookie consent utility functions

export const getCookieConsent = () => {
  return localStorage.getItem('cookieConsent');
};

export const getCookieConsentDate = () => {
  return localStorage.getItem('cookieConsentDate');
};

export const hasCookieConsent = () => {
  return getCookieConsent() !== null;
};

export const hasAcceptedCookies = () => {
  return getCookieConsent() === 'accepted';
};

export const hasRejectedCookies = () => {
  return getCookieConsent() === 'rejected';
};

export const clearCookieConsent = () => {
  localStorage.removeItem('cookieConsent');
  localStorage.removeItem('cookieConsentDate');
};

// Check if consent is expired (optional - for GDPR compliance)
export const isCookieConsentExpired = (expirationMonths = 12) => {
  const consentDate = getCookieConsentDate();
  if (!consentDate) return true;
  
  const consentDateTime = new Date(consentDate);
  const expirationDate = new Date(consentDateTime);
  expirationDate.setMonth(expirationDate.getMonth() + expirationMonths);
  
  return new Date() > expirationDate;
};

// Analytics initialization function
export const initializeAnalytics = () => {
  if (!hasAcceptedCookies()) return;
  
  console.log('Analytics initialized - user accepted cookies');
  
  // Example integrations (uncomment when you have actual tracking IDs):
  
  // Google Analytics 4
  // if (window.gtag) {
  //   gtag('config', 'GA_MEASUREMENT_ID');
  // }
  
  // Mixpanel
  // if (window.mixpanel) {
  //   mixpanel.init('YOUR_PROJECT_TOKEN');
  // }
  
  // Facebook Pixel
  // if (window.fbq) {
  //   fbq('init', 'YOUR_PIXEL_ID');
  //   fbq('track', 'PageView');
  // }
  
  // Hotjar
  // if (window.hj) {
  //   hj('stateChange', document.location.pathname);
  // }
};

// Clear tracking cookies function
export const clearTrackingCookies = () => {
  console.log('Clearing tracking cookies - user rejected cookies');
  
  // Clear Google Analytics cookies
  const gaCookies = ['_ga', '_gid', '_gat', '_gat_gtag_UA_', '_gat_gtag_G_'];
  gaCookies.forEach(cookie => {
    document.cookie = `${cookie}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${window.location.hostname}`;
    document.cookie = `${cookie}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  });
  
  // Clear Facebook Pixel cookies
  const fbCookies = ['_fbp', '_fbc'];
  fbCookies.forEach(cookie => {
    document.cookie = `${cookie}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${window.location.hostname}`;
    document.cookie = `${cookie}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  });
  
  // Disable analytics tracking
  if (window.gtag) {
    window.gtag('consent', 'update', {
      'analytics_storage': 'denied',
      'ad_storage': 'denied'
    });
  }
};
