import { Router } from 'express';
import { getTest, getTestById, getTestWithQuery, createTest } from '../controllers/testController';

const router = Router();

// Ruta GET / para prueba
router.get('/', getTest);

// Ruta GET /query para manejar query strings
router.get('/query', getTestWithQuery);

// Ruta GET /:id para prueba por ID
router.get('/:id', getTestById);

// Ruta POST / para crear un nuevo test
router.post('/', createTest);

export default router;

