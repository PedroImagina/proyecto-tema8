import { Router } from 'express';
// import { ... } from '../controllers/appointmentController';
import { validate } from '../middlewares/validate';
import { createAppointmentSchema } from '../schemas/appointment';

const router = Router();

// Rutas de citas
// router.get('/', ...);
// router.get('/:id', ...);
router.post('/', validate(createAppointmentSchema), (req, res) => {
  // El controlador recibirá los datos ya validados y transformados
  // La fecha starts_at será un objeto Date
  res.json({ message: 'Turno validado correctamente', data: req.body });
});
// router.put('/:id', ...);
// router.delete('/:id', ...);

export default router;

