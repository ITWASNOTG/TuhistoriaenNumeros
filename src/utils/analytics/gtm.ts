import { AnalyticsEvent, DateSelectedEvent, StatsViewedEvent, ShareEvent } from './config';

export function trackEvent(
  eventName: AnalyticsEvent,
  eventData?: DateSelectedEvent | StatsViewedEvent | ShareEvent
) {
  if (window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...eventData,
    });
  }
}

export function trackPageView(path: string, title: string) {
  if (window.dataLayer) {
    window.dataLayer.push({
      event: 'page_view',
      page: {
        path,
        title,
      },
    });
  }
}