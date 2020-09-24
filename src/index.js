'use strict';

const KeyvSql = require('@keyv/sql');
const DataAPIClient = require('data-api-client');

class KeyvAuroraDataAPI extends KeyvSql {
  constructor(opts) {
    opts = Object.assign({
      dialect: 'postgres',
    }, opts);

    opts.connect = () => Promise.resolve()
      .then(() => {
        const data = DataAPIClient(opts);
        return sql => data.query(sql)
          .then(data => data.records);
      });

    super(opts);
  }
}

module.exports = KeyvAuroraDataAPI;
