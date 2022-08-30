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
    descripcionCorta: {
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
    publicado: {
      type: DataTypes.ENUM(['publicado', 'borrador']),
      allowNull: false,
      defaultValue: "borrador"
      
    },
    estado: {
      type: DataTypes.ENUM(['completado', 'activo']),
      allowNull: false,
      defaultValue: "activo"
      
    },
    fecha: {
      type: Sequelize.STRING,
     
    },
  });
};
