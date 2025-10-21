/**
 * Utility types and constants for the investment growth visualizer
 */

import { TimeRange, TimeRangeConfig } from './asset';

// Time range configurations with metadata
export const TIME_RANGE_CONFIGS: Record<TimeRange, TimeRangeConfig> = {
  '1Y': {
    label: '1 Year',
    value: '1Y',
    months: 12,
    description: 'Past 12 months of data'
  },
  '3Y': {
    label: '3 Years',
    value: '3Y',
    months: 36,
    description: 'Past 3 years of data'
  },
  '5Y': {
    label: '5 Years',
    value: '5Y',
    months: 60,
    description: 'Past 5 years of data'
  },
  '10Y': {
    label: '10 Years',
    value: '10Y',
    months: 120,
    description: 'Past 10 years of data'
  },
  'MAX': {
    label: 'Maximum',
    value: 'MAX',
    months: -1, // Indicates all available data
    description: 'All available historical data'
  }
};

// Asset type configurations
export const ASSET_TYPE_CONFIGS = {
  stock: {
    label: 'Stock',
    color: '#3B82F6',
    icon: 'TrendingUp'
  },
  etf: {
    label: 'ETF',
    color: '#10B981',
    icon: 'PieChart'
  },
  crypto: {
    label: 'Crypto',
    color: '#F59E0B',
    icon: 'Coins'
  },
  index: {
    label: 'Index',
    color: '#8B5CF6',
    icon: 'BarChart3'
  }
} as const;

// API configuration constants
export const API_CONFIGS = {
  yahoo: {
    baseUrl: 'https://query1.finance.yahoo.com',
    rateLimit: {
      requestsPerMinute: 100,
      requestsPerDay: 2000
    },
    timeout: 10000,
    retries: 3
  },
  alphaVantage: {
    baseUrl: 'https://www.alphavantage.co',
    rateLimit: {
      requestsPerMinute: 5,
      requestsPerDay: 500
    },
    timeout: 15000,
    retries: 2
  }
} as const;

// Chart color palette
export const CHART_COLORS = [
  '#3B82F6', // Blue
  '#10B981', // Green
  '#F59E0B', // Yellow
  '#EF4444', // Red
  '#8B5CF6', // Purple
  '#F97316', // Orange
  '#06B6D4', // Cyan
  '#84CC16', // Lime
  '#EC4899', // Pink
  '#6B7280'  // Gray
] as const;

// Performance thresholds for color coding
export const PERFORMANCE_THRESHOLDS = {
  excellent: 20,  // > 20% return
  good: 10,       // 10-20% return
  neutral: 0,     // 0-10% return
  poor: -10,      // -10-0% return
  terrible: -20   // < -20% return
} as const;

// Validation constants
export const VALIDATION_LIMITS = {
  maxAssets: 10,
  minSymbolLength: 1,
  maxSymbolLength: 10,
  maxSearchResults: 50,
  minInvestmentAmount: 1,
  maxInvestmentAmount: 1000000
} as const;

// Date utility types
export interface DateUtilities {
  formatDate: (date: Date) => string;
  parseDate: (dateString: string) => Date;
  getDateRange: (timeRange: TimeRange, endDate?: Date) => { startDate: Date; endDate: Date };
  isValidDateRange: (startDate: Date, endDate: Date) => boolean;
}

// Calculation utility types
export interface CalculationUtilities {
  calculateReturn: (startValue: number, endValue: number) => number;
  calculateAnnualizedReturn: (totalReturn: number, years: number) => number;
  calculateVolatility: (returns: number[]) => number;
  calculateMaxDrawdown: (values: number[]) => number;
  calculateSharpeRatio: (returns: number[], riskFreeRate?: number) => number;
}

// Format utility types
export interface FormatUtilities {
  formatCurrency: (amount: number, currency?: string) => string;
  formatPercentage: (value: number, decimals?: number) => string;
  formatNumber: (value: number, decimals?: number) => string;
  formatLargeNumber: (value: number) => string;
}