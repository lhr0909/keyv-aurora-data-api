# @keyv/postgres [<img width="100" align="right" src="https://rawgit.com/lukechilds/keyv/master/media/logo.svg" alt="keyv">](https://github.com/lukechilds/keyv)

> AWS Aurora Data API storage adapter for Keyv

<!-- [![Build Status](https://travis-ci.org/lukechilds/keyv-postgres.svg?branch=master)](https://travis-ci.org/lukechilds/keyv-postgres)
[![Coverage Status](https://coveralls.io/repos/github/lukechilds/keyv-postgres/badge.svg?branch=master)](https://coveralls.io/github/lukechilds/keyv-postgres?branch=master)
[![npm](https://img.shields.io/npm/v/@keyv/postgres.svg)](https://www.npmjs.com/package/@keyv/postgres) -->

[AWS Aurora Data API](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/data-api.html) storage adapter for [Keyv](https://github.com/lukechilds/keyv).

Requires Postgres 9.5 or newer for `ON CONFLICT` support to allow performant upserts. [Why?](https://stackoverflow.com/questions/17267417/how-to-upsert-merge-insert-on-duplicate-update-in-postgresql/17267423#17267423)

## Install

```shell
npm install --save keyv keyv-aurora-data-api
```

## Usage

```js
const Keyv = require('keyv');
const KeyvDataAPI = require('keyv-aurora-data-api');

const keyv = new Keyv({
  store: new KeyvDataAPI({
    dialect: 'postgres', // or 'mysql'
    secretArn: 'arn:aws:secretsmanager:us-east-1:XXXXXXXXXXXX:secret:mySecret',
    resourceArn: 'arn:aws:rds:us-east-1:XXXXXXXXXXXX:cluster:my-cluster-name',
    database: 'myDatabase', // default database
  }),
});

keyv.on('error', handleConnectionError);
```

The options for the data API driver is listed [here](https://github.com/jeremydaly/data-api-client).

## License

[MIT](./LICENSE)
