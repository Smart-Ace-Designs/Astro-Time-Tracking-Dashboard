import type { ObjectId } from "mongodb";

export interface Timeframe {
  current: number;
  previous: number;
}
export interface TimeEntry {
  _id: ObjectId;
  title: string;
  image: string;
  color: string;
  timeframes: { daily: Timeframe; weekly: Timeframe; monthly: Timeframe };
}
