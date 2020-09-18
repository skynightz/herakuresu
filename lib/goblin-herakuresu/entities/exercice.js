'use strict';

const {buildEntity} = require('goblin-workshop');

/****************************** Helpers function ******************************/

/******************************************************************************/

const entity = {
  type: 'exercice',

  references: {
    customerId: 'customer',
  },

  properties: {
    name: {
      type: 'string',
      defaultValue: '',
    },
    status: {
      type: 'enum',
      values: ['draft', 'private', 'public'],
      defaultValue: 'draft',
    },
    tags: {
      type: 'enum',
      values: [
        'shoulder',
        'upper back',
        'lower back',
        'biceps',
        'triceps',
        'forearms',
        'abs',
        'glutes',
        'quadriceps',
        'hamstrings',
        'calves',
      ],
      // TODO: Improve enum type to have category in enum and multiple values selected ?
      //fullBody: {
      //  upperBody: [
      //    'shoulder',
      //    'lower back',
      //    'upper back',
      //    'biceps',
      //    'triceps',
      //    'forearms',
      //    'abs',
      //  ],
      //  lowerBody: ['glutes', 'quadriceps', 'hamstrings', 'calves'],
      //},
      defaultValue: [], // can have multiple values
    },
    videoLink: {
      type: 'string',
      defaultValue: '',
    },
    staminaLevel: {
      type: 'number',
      defaultValue: 1,
      min: 1,
      max: 5,
    },
    strengthLevel: {
      type: 'number',
      defaultValue: 1,
      min: 1,
      max: 5,
    },
    agilityLevel: {
      type: 'number',
      defaultValue: 1,
      min: 1,
      max: 5,
    },
    prerequisites: {
      type: 'string',
      defaultValue: '',
    },
    exerciceType: {
      type: 'enum',
      values: ['rep', 'sec'], // Define if it's repetition or time to hold
      defaultValue: 'rep',
    },
    comment: {
      type: 'string',
      defaultValue: '',
    },
  },

  summaries: {
    info: {type: 'string', defaultValue: ''},
    description: {type: 'markdown', defaultValue: ''},
  },

  buildSummaries: function (quest) {
    const info = '';
    const description = '';
    return {info, description};
  },

  indexer: function (quest, customer) {
    const info = customer.get('meta.summaries.description');
    return {info};
  },

  onNew: function (quest, id) {
    return {
      id,
      name: '',
      status: 'draft',
      tags: [], // can have multiple values
      staminaLevel: 1,
      strengthLevel: 1,
      agilityLevel: 1,
      prerequisites: '',
      exerciceType: 'rep',
      comment: '',
    };
  },
};

/******************************************************************************/

module.exports = {
  entity,
  service: buildEntity(entity),
};
