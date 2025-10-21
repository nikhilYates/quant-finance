/**
 * Financial data types and API response interfaces
 */

import { Asset, FinancialDataPoint } from './asset';

// Yahoo Finance API Response Types
export interface YahooFinanceQuote {
  symbol: string;
  regularMarketPrice: number;
  regularMarketChange: number;
  regularMarketChangePercent: number;
  regularMarketTime: number;
  regularMarketDayHigh: number;
  regularMarketDayLow: number;
  regularMarketVolume: number;
  marketCap?: number;
  trailingPE?: number;
  forwardPE?: number;
  dividendYield?: number;
  fiftyTwoWeekLow: number;
  fiftyTwoWeekHigh: number;
  averageVolume: number;
  shortName: string;
  longName: string;
  currency: string;
  exchangeName: string;
  quoteType: string;
}

export interface YahooFinanceHistoricalData {
  chart: {
    result: Array<{
      meta: {
        currency: string;
        symbol: string;
        exchangeName: string;
        instrumentType: string;
        firstTradeDate: number;
        regularMarketTime: number;
        gmtoffset: number;
        timezone: string;
        exchangeTimezoneName: string;
        regularMarketPrice: number;
        chartPreviousClose: number;
        scale: number;
        priceHint: number;
        currentTradingPeriod: {
          pre: {
            timezone: string;
            start: number;
            end: number;
            gmtoffset: number;
          };
          regular: {
            timezone: string;
            start: number;
            end: number;
            gmtoffset: number;
          };
          post: {
            timezone: string;
            start: number;
            end: number;
            gmtoffset: number;
          };
        };
        dataGranularity: string;
        range: string;
        validRanges: string[];
      };
      timestamp: number[];
      indicators: {
        quote: Array<{
          volume: number[];
          high: number[];
          close: number[];
          low: number[];
          open: number[];
        }>;
        adjclose?: Array<{
          adjclose: number[];
        }>;
      };
    }>;
    error: null | {
      code: string;
      description: string;
    };
  };
}

export interface YahooFinanceSearchResult {
  explains: any[];
  count: number;
  quotes: Array<{
    exchange: string;
    shortname: string;
    quoteType: string;
    symbol: string;
    index: string;
    score: number;
    typeDisp: string;
    longname: string;
    exchDisp: string;
    sector?: string;
    industry?: string;
    isYahooFinance: boolean;
  }>;
  news: any[];
  nav: any[];
  lists: any[];
  researchReports: any[];
  screenerFieldResults: any[];
  totalTime: number;
  timeTakenForQuotes: number;
  timeTakenForNews: number;
  timeTakenForAlgowatchlist: number;
  timeTakenForPredefinedScreener: number;
  timeTakenForCrunchbase: number;
  timeTakenForNav: number;
  timeTakenForResearchReports: number;
  timeTakenForScreenerField: number;
  timeTakenForCulturalAssets: number;
}

// Alpha Vantage API Response Types
export interface AlphaVantageTimeSeriesDaily {
  'Meta Data': {
    '1. Information': string;
    '2. Symbol': string;
    '3. Last Refreshed': string;
    '4. Output Size': string;
    '5. Time Zone': string;
  };
  'Time Series (Daily)': {
    [date: string]: {
      '1. open': string;
      '2. high': string;
      '3. low': string;
      '4. close': string;
      '5. volume': string;
    };
  };
}

export interface AlphaVantageSearchResult {
  bestMatches: Array<{
    '1. symbol': string;
    '2. name': string;
    '3. type': string;
    '4. region': string;
    '5. marketOpen': string;
    '6. marketClose': string;
    '7. timezone': string;
    '8. currency': string;
    '9. matchScore': string;
  }>;
}

export interface AlphaVantageQuote {
  'Global Quote': {
    '01. symbol': string;
    '02. open': string;
    '03. high': string;
    '04. low': string;
    '05. price': string;
    '06. volume': string;
    '07. latest trading day': string;
    '08. previous close': string;
    '09. change': string;
    '10. change percent': string;
  };
}

export interface AlphaVantageErrorResponse {
  'Error Message'?: string;
  'Note'?: string;
  'Information'?: string;
}

// Unified API Response Types
export interface ApiResponse<T> {
  data: T | null;
  error: string | null;
  success: boolean;
  source: 'yahoo' | 'alpha-vantage';
  timestamp: number;
  cached?: boolean;
}

export interface HistoricalDataResponse extends ApiResponse<FinancialDataPoint[]> {
  symbol: string;
  timeRange: string;
  startDate: string;
  endDate: string;
  dataPoints: number;
}

export interface AssetSearchResponse extends ApiResponse<Asset[]> {
  query: string;
  totalResults: number;
}

export interface QuoteResponse extends ApiResponse<YahooFinanceQuote | AlphaVantageQuote> {
  symbol: string;
}

// Error handling types
export interface ApiError {
  code: string;
  message: string;
  source: 'yahoo' | 'alpha-vantage' | 'network' | 'validation';
  retryable: boolean;
  timestamp: number;
}

export interface RateLimitInfo {
  requestsRemaining: number;
  resetTime: number;
  dailyLimit: number;
  source: 'yahoo' | 'alpha-vantage';
}

// Request configuration types
export interface ApiRequestConfig {
  timeout: number;
  retries: number;
  retryDelay: number;
  rateLimit: {
    requestsPerMinute: number;
    requestsPerDay: number;
  };
}

export interface HistoricalDataRequest {
  symbol: string;
  timeRange: string;
  interval?: '1d' | '1wk' | '1mo';
  includeAdjustedClose?: boolean;
}

export interface AssetSearchRequest {
  query: string;
  limit?: number;
  types?: string[];
  exchanges?: string[];
}