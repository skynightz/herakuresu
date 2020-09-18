'use strict';

/**
 * for xcraft-core-etc
 */
module.exports = [
  {
    type: 'input',
    name: 'mandate',
    message: 'Main mandate for this app',
    default: 'herakuresu',
  },
  {
    type: 'input',
    name: 'rethinkdbHost',
    message: 'rethinkdb hostname',
    default: 'localhost',
  },
  {
    type: 'input',
    name: 'elasticsearchUrl',
    message: 'elasticsearch node url',
    default: 'http://localhost:9200',
  },
];
