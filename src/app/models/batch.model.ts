/**
 * Batch Model interface defines all properties
 * which this application processes
 */
export interface Batch {
    id?: number;
    batchId?: string;
    name?: string;
    startDate?: string;
    endDate?: string;
    skill?: string;
    location?: string;
}
