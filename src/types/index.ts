/**
 * Central export file for all TypeScript types and interfaces
 */

// Asset and core types
export type {
  Asset,
  FinancialDataPoint,
  GrowthDataPoint,
  PerformanceMetrics,
  TimeRange,
  AssetType,
  AssetSearchResult,
  TimeRangeConfig,
  DateRange,
} from './asset';

// Financial data and API types
export type {
  // Yahoo Finance types
  YahooFinanceQuote,
  YahooFinanceHistoricalData,
  YahooFinanceSearchResult,
  
  // Alpha Vantage types
  AlphaVantageTimeSeriesDaily,
  AlphaVantageSearchResult,
  AlphaVantageQuote,
  AlphaVantageErrorResponse,
  
  // Unified API types
  ApiResponse,
  HistoricalDataResponse,
  AssetSearchResponse,
  QuoteResponse,
  
  // Error handling types
  ApiError,
  RateLimitInfo,
  
  // Request configuration types
  ApiRequestConfig,
  HistoricalDataRequest,
  AssetSearchRequest,
} from './financial-data';

// Utility type helpers
export type Nullable<T> = T | null;
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>;

// Common utility types for the application
export interface LoadingState {
  isLoading: boolean;
  error: string | null;
  lastUpdated: number | null;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}

// Chart and visualization types
export interface ChartDataPoint {
  x: number | string;
  y: number;
  label?: string;
  color?: string;
}

export interface ChartConfig {
  width?: number;
  height?: number;
  margin?: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  };
  colors?: string[];
  showGrid?: boolean;
  showLegend?: boolean;
  showTooltip?: boolean;
}

// Utility types and constants
export {
  TIME_RANGE_CONFIGS,
  ASSET_TYPE_CONFIGS,
  API_CONFIGS,
  CHART_COLORS,
  PERFORMANCE_THRESHOLDS,
  VALIDATION_LIMITS,
} from './utils';

export type {
  DateUtilities,
  CalculationUtilities,
  FormatUtilities,
} from './utils';