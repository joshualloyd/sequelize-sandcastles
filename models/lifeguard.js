'use strict';
module.exports = (sequelize, DataTypes) => {
  var Lifeguard = sequelize.define('Lifeguard', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING
  });
  Lifeguard.prototype.getFullName = function () {
    return `${this.first_name} ${this.last_name}`
  }
  return Lifeguard;
};