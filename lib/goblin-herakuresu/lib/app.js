'use strict';
////////////////////////////////////////////////////////////////
// herakuresu
////////////////////////////////////////////////////////////////

const Goblin = require('xcraft-core-goblin');

const quests = {}; //Impl. your app base quest's here

module.exports = Goblin.buildApplication('herakuresu', {icon: '🕮', quests});
