// los modelos son la esencia de sequelize, es una abstraccion que representa una tabla en la base de datos
// en Sequelize es una clase que extiende model
// el modelo le dice a Sequelize varias cosas de la entidad que representa como el nombre de la tabla en la base de datos
// las columnas que tiene y los tipos de datos

// importamos la coneccion a la base de datos
import db from '../database/db.js';
import { DataTypes } from 'sequelize';

const BlogModel = db.define('blogsPractice', {
   // Define tu esquema de blogs:
   title: {
      type: DataTypes.STRING,
      allowNull: false, // Asegura que el título no puede ser nulo
   },
   content: {
      type: DataTypes.STRING,
      allowNull: false, // Asegura que el contenido no puede ser nulo
   },
   //    createdAt: {
   //       type: DataTypes.DATE,
   //       allowNull: false,
   //       defaultValue: DataTypes.NOW, // Valor predeterminado para la fecha de creación
   //    },
   //    updatedAt: {
   //       type: DataTypes.DATE,
   //       allowNull: false,
   //       defaultValue: DataTypes.NOW, // Valor predeterminado para la fecha de actualización
   //    },
});

export default BlogModel;
