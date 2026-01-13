import { Router } from 'express';
// import { ... } from '../controllers/authController';
import { validate } from '../middlewares/validate';
import { registerSchema, loginSchema } from '../schemas/auth';

const router = Router();

// Rutas de autenticación
// router.post('/login', validate(loginSchema), ...);
router.post('/register', validate(registerSchema), (req, res) => {
  // El controlador recibirá los datos ya validados y transformados
  res.json({ message: 'Registro validado correctamente', data: req.body });
});

router.post('/login', validate(loginSchema), (req, res) => {
  // El controlador recibirá los datos ya validados y transformados
  res.json({ message: 'Login validado correctamente', data: req.body });
});

export default router;

