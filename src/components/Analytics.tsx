import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { initializeAnalytics, trackPageView } from '../utils/analytics';

export function Analytics() {
  const location = useLocation();

  useEffect(() => {
    initializeAnalytics();
  }, []);

  useEffect(() => {
    trackPageView(location.pathname);
  }, [location]);

  return null;
}