export enum AssetStatus {
  CRITICAL = 'critical',
  HIGH = 'high',
  MEDIUM = 'medium',
  LOW = 'low',
}

export interface Asset {
  id: string;
  name: string;
  status: AssetStatus;
  code: string;
}
