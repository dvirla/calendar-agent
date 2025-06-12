export const GA_MEASUREMENT_ID = 'G-57CNRN5B5M';
export const COOKIE_CONSENT_KEY = 'cookieConsent';
export const COOKIE_CONSENT_DATE_KEY = 'cookieConsentDate';

/**
 * Checks if the user has explicitly accepted cookies for analytics.
 * @returns {boolean} True if consent was granted, false otherwise.
 */
export const hasGivenConsent = () => {
  return localStorage.getItem(COOKIE_CONSENT_KEY) === 'accepted';
};

/**
 * Checks if a cookie consent choice (accepted or rejected) has been made by the user.
 * @returns {boolean} True if a choice has been recorded, false otherwise.
 */
export const hasCookieConsentBeenSet = () => {
  return localStorage.getItem(COOKIE_CONSENT_KEY) !== null;
};

/**
 * Grants analytics consent, updates gtag, and sends initial GA config.
 * This initial config will also send a page_view.
 */
export const grantAnalyticsConsent = () => {
  if (typeof gtag !== 'undefined') {
    gtag('consent', 'update', {
      'analytics_storage': 'granted'
    });
    // This config call initializes GA for the measurement ID and sends a page_view.
    gtag('config', GA_MEASUREMENT_ID);
    console.log('Analytics consent granted and GA initialized.');
  }
};

/**
 * Denies analytics consent and updates gtag.
 */
export const denyAnalyticsConsent = () => {
  if (typeof gtag !== 'undefined') {
    gtag('consent', 'update', {
      'analytics_storage': 'denied'
    });
    console.log('Analytics consent denied.');
  }
};

/**
 * Tracks a page view if analytics consent has been given.
 * @param {string} page_title The title of the page.
 * @param {string} page_location The URL of the page.
 */
export const trackPageView = (page_title, page_location) => {
  if (typeof gtag !== 'undefined' && hasGivenConsent()) {
    gtag('config', GA_MEASUREMENT_ID, {
      page_title: page_title,
      page_location: page_location
    });
    console.log(`Page view tracked: ${page_title} at ${page_location}`);
  }
};