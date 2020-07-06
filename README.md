# The List of All Endpoints that the FrontEnd can currently Utilize

## 1. **Sync Service**
Endpoint | Purpose | REST Request Method
------------ | ------------- | -------------
/sync| **Manually** triggers sync process to retrieve new data from Google Sheets.|POST
/batch| **Manually** triggers sync process to upload data from a JSON request and send it to a messaging queue.|POST

## 2. **Survey Service**
Endpoint | Purpose | REST Request Method
------------ | ------------- | -------------
/batch/list| Get a list of all batches|GET
/batch/weeks| Get list of all weeks|GET
/batch/{name}| Get a list of Form Response objects by specified batchName|GET
/batch/{name}/{week}| Get a list of Form Response objects by specified batchName and Week|GET
/batch/chartdatabatch/week/{week}| Get a list of averaged data for questions based on a specified week|GET
/batch/chartdatabatch/name/{name}| Get list of averaged data for questions based on a specified batchName|GET
/batch/chartdatabatch/all| Get the averaged data for questions across all batches over all weeks|GET
/batch/chartdatabatch/{name}/{week}| Get the averaged data for questions based on a specified batch and a particular week|GET

## 3. **Training Service**
### Associate Controller
Endpoint | Purpose | REST Request Method
------------ | ------------- | -------------
/associate/| Get a list of all associates|GET
/associate/| Create an associate|POST
/associate/| Update an associate|PUT
/associate/{associateId}| Delete an associate by their id|DELETE
/associate/id/{associateId}| Get an associate by their id|GET
/associate/batch-name/{batchName}| Get a list of associates for a particular batch|GET
/associate/batch-name/{batchName}/active/{active}| Get a list of **active** associates by batchName ({active} = true)|GET
/associate/batch-id/{batchId}| Get a list of associates by batchId|GET
/associate/batch-id/{batchId}/active/{active}| Get a list of **active** associates by batchId ({active} = true)|GET
/associate/name/{firstName+lastName}/| Get a list of associates by full name ('firstName'+'lastName')|GET
/associate/active-emails| Get a list of emails for **active** associates|GET

### Employee Controller
Endpoint | Purpose | REST Request Method
------------ | ------------- | -------------
/employee/| Get a list of all employees|GET
/employee/| Create an employee|POST
/employee/| Update an employee|PUT
/employee/{employeeId}| Delete an employee by their id|DELETE
/employee/employee-id/{employeeId}| Get an employee by their id|GET
/employee/employee-name/{firstName}/{lastName}| Get an employee by their full name ('firstName'/'lastName')|GET

### Batch Controller
Endpoint | Purpose | REST Request Method
------------ | ------------- | -------------
/batch/| Get a list of all batches|GET
/batch/| Create a batch|POST
/batch/| Update a batch|PUT
/batch/{batchId}| Delete a batch by its batchId|DELETE
/batch/id/{batchId}| Get a batch by its batchId|GET
/batch/name/{batchName}| Get a batch by its batchName|GET
/batch/start-date/{date}| Get a list of batches that started on a specified date|GET
/batch/start-date-max/{date}| Get a list of batches that starts/started before a specified date|GET
/batch/start-date-min/{date}| Get a list of batches that starts/started after a specified date|GET
/batch/start-date-range/{dateOne}/{dateTwo}| Get a list of batches that starts/started between two specified dates|GET
/batch/end-date/{date}| Get a list of batches that ended on a specified date|GET
/batch/end-date-max/{date}| Get a list of batches that ends/ended before a specified date|GET
/batch/end-date-min/{date}| Get a list of batches that ends/ended after a specified date|GET
/batch/end-date-range/{dateOne}/{dateTwo}| Get a list of batches that ends/ended between two specified dates|GET
/batch/date-range/{dateOne}/{dateTwo}| Get a list of batches that starts/started after {dateOne} and ends/ended before {dateTwo}|GET
/batch/skill/{skill}| Get a list of batches by batch skill|GET
/batch/location/{batchLocation}| Get a list of batches by batchLocation|GET
/batch/type/{batchType}| Get a list of batches by batchType|GET
/batch/week/{currentWeek}| Get a list of batches by the current week they are in|GET
/batch/employee-id/{employeeId}| Get a list of batches by employeeId|GET
/batch/employee-name/{firstName}/{lastName}| Get a list of batches by an employee's full name ('firstName'/'lastName')|GET
/batch/trainer-id/{employeeId}| Get a list of batches by a **lead trainer's** employeeId|GET
/batch/trainer-name/{firstName}/{lastName}| Get a list of batches by a **lead trainer's** full name ('firstName'/'lastName')|GET
