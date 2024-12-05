import { AnalyticsEvent } from './types';

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export function initializeAnalytics() {
  // Initialize Google Analytics
  window.dataLayer = window.dataLayer || [];
  window.gtag = function() {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', 'G-SYMG8MHE8R');
}

export function trackEvent(eventName: string, eventData?: Record<string, any>) {
  if (window.gtag) {
    window.gtag('event', eventName, eventData);
  }
}

export function trackPageView(path: string) {
  trackEvent('page_view', {
    page_path: path,
    page_title: document.title
  });
}

export type { AnalyticsEvent };