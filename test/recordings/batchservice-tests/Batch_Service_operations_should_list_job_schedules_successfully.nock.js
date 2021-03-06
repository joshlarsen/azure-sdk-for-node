// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'test4';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://test4.japaneast.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'f30ef677-64a9-4768-934f-5fbbc0e1ad27';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://test4.japaneast.batch.azure.com:443')
  .get('/jobschedules?api-version=2020-03-01.11.0')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://test4.japaneast.batch.azure.com/$metadata#jobschedules\",\"value\":[\r\n    {\r\n      \"id\":\"NodeSDKTestSchedule\",\"url\":\"https://test4.japaneast.batch.azure.com/jobschedules/NodeSDKTestSchedule\",\"eTag\":\"0x8D7CD51695E1909\",\"lastModified\":\"2020-03-21T04:36:24.0034057Z\",\"creationTime\":\"2020-03-21T04:36:24.0034057Z\",\"state\":\"active\",\"stateTransitionTime\":\"2020-03-21T04:36:24.0034057Z\",\"schedule\":{\r\n        \"doNotRunUntil\":\"2020-12-25T08:00:00Z\",\"startWindow\":\"PT6M\"\r\n      },\"jobSpecification\":{\r\n        \"priority\":0,\"usesTaskDependencies\":false,\"onAllTasksComplete\":\"noaction\",\"onTaskFailure\":\"noaction\",\"constraints\":{\r\n          \"maxWallClockTime\":\"P10675199DT2H48M5.4775807S\",\"maxTaskRetryCount\":0\r\n        },\"poolInfo\":{\r\n          \"poolId\":\"nodesdktestpool1\"\r\n        }\r\n      },\"executionInfo\":{\r\n        \"nextRunTime\":\"2020-12-25T08:00:00Z\"\r\n      }\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '57c0e74a-5d96-43fe-8b67-893224fe121a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Sat, 21 Mar 2020 04:36:24 GMT',
  connection: 'close' });
 return result; }]];