// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
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

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
