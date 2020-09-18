'use strict';

const {buildEntity} = require('goblin-workshop');

/****************************** Helpers function ******************************/

/******************************************************************************/

const entity = {
  type: 'workout',

  references: {
    customerId: 'customer',
    exerciceIds: 'exercice[]',
  },

  properties: {
    name: {
      type: 'string',
      defaultValue: '',
    },
    goals: {
      type: 'object',
      defaultValue: {
        //exerciceId: value (sec or rep)
      },
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
      defaultValue: [],
    },
    prerequisites: {
      type: 'string',
      defaultValue: '',
    },
    workoutType: {
      type: 'enum',
      values: ['circuit', 'sets'], // Define if the user do all exercies in a serie or one exercice by serie
      defaultValue: 'circuit',
    },
    restTimeBetweenSeries: {
      type: 'number',
      defaultValue: 120, // Rest time between series (in second)
    },
    restTimeBetweenExercices: {
      type: 'number',
      defaultValue: 30, // Rest time between excercices (in second)
    },
    comment: {
      type: 'string',
      defaultValue: '',
    },
  },

  summaries: {
    info: {type: 'string', defaultValue: ''},
  },

  sums: {
    staminaLevel: {
      type: 'number', // Ponderation of all exercices in workout
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

  onNew: function (quest, id) {
    return {
      id,
      name: '',
      status: 'draft',
      tags: [],
      prerequisites: '',
      workoutType: 'circuit',
      restTimeBetweenSeries: 120,
      restTimeBetweenExercices: 30,
      comment: '',
    };
  },
};

/******************************************************************************/

module.exports = {
  entity,
  service: buildEntity(entity),
};
