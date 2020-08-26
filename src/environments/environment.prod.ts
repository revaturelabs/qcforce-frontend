export const environment = {
  production: true,
  // =============Angular URLS==============================
  getBatchUrl: 'http://ec2-13-59-82-196.us-east-2.compute.amazonaws.com:8087/batch/list',
  getWeeksUrl: 'http://ec2-13-59-82-196.us-east-2.compute.amazonaws.com:8087/batch/weeks',
  getBatchAllWeeks: 'http://ec2-13-59-82-196.us-east-2.compute.amazonaws.com:8087/batch/chartdatabatch/name/',
  getOneBatchOneWeek: 'http://ec2-13-59-82-196.us-east-2.compute.amazonaws.com:8087/batch/chartdatabatch/',
  getAvgWeekBatch: 'http://ec2-13-59-82-196.us-east-2.compute.amazonaws.com:8087/batch/chartdatabatch/all',
  getAnswersUrl: 'http://localhost:3000/answers',
  getWeekAllUrl: 'http://ec2-13-59-82-196.us-east-2.compute.amazonaws.com:8087/batch/chartdatabatch/week/',

  // =============Training Service URLS==============================
  getBatchListUrl: 'http://ec2-18-219-219-28.us-east-2.compute.amazonaws.com:8086/batch/', // 'http://localhost:3100/batches',
  getSurveysByBatchIdUrl: 'http://localhost:3001/surveys',
  getBatchByBatchName: 'http://ec2-13-59-82-196.us-east-2.compute.amazonaws.com:8087',
  getAssociateByBatchName: 'http://ec2-18-219-219-28.us-east-2.compute.amazonaws.com:8086/associate/batch-name/',

 // ==============Sync Service===============================
 postSyncService: 'http://ec2-3-23-215-133.us-east-2.compute.amazonaws.com:8085/sync',
};

