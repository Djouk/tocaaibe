'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Artist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
       
        this.belongsTo(models.User)

    }
  }
  Artist.init({
    name: DataTypes.STRING,
    profilePic: DataTypes.STRING,
    coverPic: DataTypes.STRING,
    bio: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Artist',
  });

  return Artist;
};