import { useState, useEffect } from 'react';
import { hasAcceptedCookies, hasCookieConsent } from '../utils/cookieConsent.js';

// Custom hook for cookie consent management
export const useCookieConsent = () => {
  const [hasConsent, setHasConsent] = useState(false);
  const [hasAccepted, setHasAccepted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setHasConsent(hasCookieConsent());
    setHasAccepted(hasAcceptedCookies());
    setLoading(false);
  }, []);

  return {
    hasConsent,
    hasAccepted,
    loading
  };
};

export default useCookieConsent;
