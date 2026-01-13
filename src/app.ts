import express from 'express';
import testRoutes from './routes/testRoutes';
import authRoutes from './routes/authRoutes';
import userRoutes from './routes/userRoutes';
import serviceRoutes from './routes/serviceRoutes';
import appointmentRoutes from './routes/appointmentRoutes';

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Registrar rutas
app.use('/', testRoutes);
app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/services', serviceRoutes);
app.use('/appointments', appointmentRoutes);

export default app;

