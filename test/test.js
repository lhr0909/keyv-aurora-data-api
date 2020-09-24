import test from 'ava';
import keyvTestSuite from '@keyv/test-suite';
import Keyv from 'keyv';
import KeyvAuroraDataAPI from 'this';

const store = () => new KeyvAuroraDataAPI({
  dialect: 'postgres', // or 'mysql'
  secretArn: 'arn:aws:secretsmanager:us-east-1:XXXXXXXXXXXX:secret:mySecret',
  resourceArn: 'arn:aws:rds:us-east-1:XXXXXXXXXXXX:cluster:my-cluster-name',
  database: 'keyv_test', // default database
});

keyvTestSuite(test, Keyv, store);
