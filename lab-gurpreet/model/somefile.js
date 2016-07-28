'use strict';

const uuid = require('node-uuid');

function somefile(name, skill, gender) {
  this.id = uuid.v4();
  this.name = name;
  this.skill = skill;
  this.gender = gender;
}

module.exports = somefile;
