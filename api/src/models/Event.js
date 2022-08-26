const { DataTypes, Sequelize } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  
  sequelize.define('event', {
    id:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    titulo: {
      type: DataTypes.STRING,
      
    },
    otro: {
      type: DataTypes.STRING,
      
    },
    descripcionLarga: {
      type: DataTypes.TEXT,
      
    },
    organizador: {
      type: DataTypes.STRING,
      
    },
    lugar: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    estado: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
      
    },
    fecha: {
      type: Sequelize.STRING,
     
    },
  });
};
