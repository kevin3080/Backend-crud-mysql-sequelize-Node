import express from 'express';
import cors from 'cors';
// importamos la conexion a la DB
import db from './database/db.js';
// importamos nuestro enrutador
import blogRoutes from './routes/routes.js';
import { PORT } from './config.js';

const app = express();

app.use(cors());
app.use(express.json());
// aca configuramos nuestras rutas: http://localhost:8000/blogs/
app.use('/blogs', blogRoutes);

try {
   await db.authenticate();
   console.log('Conexion exitosa a la DB');
} catch (error) {
   console.log(`El error de conexion es: ${error}`);
}

// app.get('/', (req, res) => {
//    res.send('HOLA MUNDO');
// });

app.listen(PORT, () => {
   console.log(`Server Up running in port ${PORT}`);
});
