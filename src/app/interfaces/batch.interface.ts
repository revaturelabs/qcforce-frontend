export interface Batch = {
  id: string;
  location: string;
  startDate: string;
  name: string;
  trainer: string;
  size: number;
  stack: string; 
  associates: Associate[];
}
