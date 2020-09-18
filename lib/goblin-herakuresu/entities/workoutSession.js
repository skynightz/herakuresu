'use strict';

const {buildEntity} = require('goblin-workshop');

/****************************** Helpers function ******************************/

/******************************************************************************/

const entity = {
  type: 'workoutSession',

  references: {
    customerId: 'customer',
    workoutId: 'workout',
  },

  properties: {
    name: {
      type: 'string',
      defaultValue: '',
    },
    results: {
      type: 'object',
      defaultValue: {
        //exerciceId: value (sec or rep)
      },
    },
    comment: {
      type: 'string',
      defaultValue: '',
    },
  },

  summaries: {
    info: {type: 'string', defaultValue: ''},
  },

  indexer: function (quest, session) {
    const info = session.get('meta.summaries.info');
    return {info};
  },

  indexerMapping: {},

  buildSummaries: function (quest) {},

  computer: function (quest, sums) {
    return sums;
  },

  quests: {},

  onNew: function (quest, id, name, results, comment) {
    return {
      id,
      name: name || '',
      results: results || {},
      comment: comment || '',
    };
  },
};

/******************************************************************************/

module.exports = {
  entity,
  service: buildEntity(entity),
};
