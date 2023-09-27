// importar el Modelo
import BlogModel from '../models/BlogModel.js';

//**  Métodos para el CRUD  **/

// Traer todos los blogs
export const getAllBlogs = async (req, res) => {
   try {
      const blogs = await BlogModel.findAll();
      res.json(blogs);
   } catch (error) {
      res.json({ message: error.message });
   }
};
// traer un blog es particular
export const getBlog = async (req, res) => {
   try {
      const blog = await BlogModel.findAll({
         where: {
            id: req.params.id,
         },
      });
      res.json(blog[0]);
   } catch (error) {
      res.json({ message: error.message });
   }
};
// crear un blog
export const createBlog = async (req, res) => {
   try {
      await BlogModel.create(req.body);
      res.json({
         message: '¡Registro creado correctamente!',
      });
   } catch (error) {
      res.json({ message: error.message });
   }
};
// actualizar un bog
export const updateBlog = async (req, res) => {
   try {
      await BlogModel.update(req.body, {
         where: { id: req.params.id },
      });
      res.json({
         message: '¡Registro actualizado correctamente!',
      });
   } catch (error) {
      res.json({ message: error.message });
   }
};
// eliminar un blog
export const deleteBlog = async (req, res) => {
   try {
      BlogModel.destroy({
         where: { id: req.params.id },
      });
      res.json({
         message: '¡Registro eliminado correctamente!',
      });
   } catch (error) {
      res.json({ message: error.message });
   }
};
