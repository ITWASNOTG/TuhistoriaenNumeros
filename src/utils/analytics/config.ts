import { AnalyticsConfig } from './types';

export const config: AnalyticsConfig = {
  gtmId: 'G-SYMG8MHE8R'
};

export const EVENTS = {
  PAGE_VIEW: 'page_view',
  DATE_SELECTED: 'date_selected',
  STATS_VIEWED: 'stats_viewed',
  SHARE_CLICKED: 'share_clicked',
  PDF_DOWNLOADED: 'pdf_downloaded'
} as const;