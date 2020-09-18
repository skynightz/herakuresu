'use strict';

const {buildEntity} = require('goblin-workshop');

/****************************** Helpers function ******************************/

/******************************************************************************/

const entity = {
  type: 'goal',

  references: {
    exerciceId: 'exercice',
  },

  properties: {
    name: {
      type: 'string',
      defaultValue: '',
    },
    status: {
      type: 'enum',
      values: ['wip', 'achieved'],
      defaultValue: 'wip',
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

  quests: {},

  onNew: function (quest, id) {
    return {
      id,
      name: '',
      status: 'wip',
    };
  },
};

/******************************************************************************/

module.exports = {
  entity,
  service: buildEntity(entity),
};
