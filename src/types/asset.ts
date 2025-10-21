/**
 * Core asset types and interfaces for the investment growth visualizer
 */

export interface Asset {
  symbol: string;
  name: string;
  type: 'stock' | 'etf' | 'crypto' | 'index';
  exchange?: string;
  currency: string;
}

export interface FinancialDataPoint {
  date: string;
  price: number;
  volume?: number;
  adjustedClose?: number;
  high?: number;
  low?: number;
  open?: number;
}

export interface GrowthDataPoint {
  date: string;
  value: number;
  asset: string;
  returnPercentage: number;
}

export interface PerformanceMetrics {
  asset: Asset;
  totalReturn: number;
  annualizedReturn: number;
  volatility: number;
  maxDrawdown: number;
  sharpeRatio?: number;
  startDate: string;
  endDate: string;
  dataPoints: number;
}

export type TimeRange = '1Y' | '3Y' | '5Y' | '10Y' | 'MAX';

export type AssetType = Asset['type'];

export interface AssetSearchResult extends Asset {
  score?: number;
  marketCap?: number;
  sector?: string;
  industry?: string;
  description?: string;
}

// Utility types for time range calculations
export interface TimeRangeConfig {
  label: string;
  value: TimeRange;
  months: number;
  description: string;
}

export interface DateRange {
  startDate: Date;
  endDate: Date;
  timeRange: TimeRange;
}