export const environment = {
  production: true,
// =============Angular URLS==============================
getBatchUrl: 'http://ec2-18-191-226-95.us-east-2.compute.amazonaws.com:8090/SurveyService/batch/list',
getWeeksUrl: 'http://ec2-18-191-226-95.us-east-2.compute.amazonaws.com:8090/SurveyService/batch/weeks',
getBatchAllWeeks: 'http://ec2-18-191-226-95.us-east-2.compute.amazonaws.com:8090/SurveyService/batch/chartdatabatch/name/',
getOneBatchOneWeek: 'http://ec2-18-191-226-95.us-east-2.compute.amazonaws.com:8090/SurveyService/batch/chartdatabatch/',
getAvgWeekBatch: 'http://ec2-18-191-226-95.us-east-2.compute.amazonaws.com:8090/SurveyService/batch/chartdatabatch/all',
getAnswersUrl: 'http://localhost:3000/answers',
getWeekAllUrl: 'http://ec2-18-191-226-95.us-east-2.compute.amazonaws.com:8090/SurveyService/batch/chartdatabatch/week/',

// =============Training Service URLS==============================

getBatchListUrl: 'http://ec2-18-191-226-95.us-east-2.compute.amazonaws.com:8090/TrainingService/batch/',
getSurveysByBatchIdUrl: 'http://localhost:3001/surveys',
getBatchByBatchName: 'http://ec2-18-191-226-95.us-east-2.compute.amazonaws.com:8090/SurveyService',
getAssociateByBatchName: 'http://ec2-18-191-226-95.us-east-2.compute.amazonaws.com:8090/TrainingService/associate/batch-name/',

// ==============Sync Service===============================
postSyncService: 'http://ec2-18-191-226-95.us-east-2.compute.amazonaws.com:8090/SyncService/sync',
};

