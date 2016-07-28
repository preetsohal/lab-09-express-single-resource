'use strict';

const uuid = require('node-uuid');

function somefile(name, skill, gender) {
  this.id = uuid.generate();
  this.name = name;
  this.skill = skill;
  this.gender = gender;
}

module.exports = somefile;
