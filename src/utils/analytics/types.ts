export interface AnalyticsEvent {
  name: string;
  data?: Record<string, any>;
}

export interface PageViewData {
  page_path: string;
  page_title: string;
}

export interface DateSelectedData {
  birth_date: string;
  age: number;
}

export interface StatsViewedData {
  days: number;
  months: number;
  years: number;
}

export interface ShareData {
  method: 'native' | 'twitter' | 'facebook' | 'whatsapp' | 'telegram' | 'pdf';
}