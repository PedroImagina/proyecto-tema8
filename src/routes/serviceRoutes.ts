import { Router } from 'express';
// import { ... } from '../controllers/serviceController';
import { validate } from '../middlewares/validate';
import { createServiceSchema, updateServiceSchema } from '../schemas/service';

const router = Router();

// Rutas de servicios
// router.get('/', ...);
// router.get('/:id', ...);
router.post('/', validate(createServiceSchema), (req, res) => {
  // El controlador recibirá los datos ya validados
  res.json({ message: 'Servicio validado correctamente', data: req.body });
});
router.put('/:id', validate(updateServiceSchema), (req, res) => {
  // El controlador recibirá los datos ya validados
  res.json({ message: 'Actualización de servicio validada correctamente', data: req.body });
});
// router.delete('/:id', ...);

export default router;

