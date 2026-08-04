export interface Session {
  readonly id: number;
  title: string;
  abstract?: string;
  startTime?: string;
  endTime?: string;
  trackId?: number;
}
