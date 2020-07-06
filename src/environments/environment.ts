// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  getBatchUrl: 'http://localhost:3000/batch',
  getAnswersUrl: 'http://localhost:3000/answers',
  getBatchListUrl: 'http://ec2-18-219-219-28.us-east-2.compute.amazonaws.com:8086/batch/', // 'http://localhost:3100/batches',
  getSurveysByBatchIdUrl: 'http://localhost:3001/surveys',
  getBatchByBatchName: 'http://ec2-3-134-110-211.us-east-2.compute.amazonaws.com:8087'

  // get = ;

  /* Sync Service: http://ec2-3-23-215-133.us-east-2.compute.amazonaws.com:8085;
   * Training Service: 'http://ec2-18-219-219-28.us-east-2.compute.amazonaws.com:8086';
   * Survey Service: http://ec2-3-134-110-211.us-east-2.compute.amazonaws.com:8087;
   */

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
