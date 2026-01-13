"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// import { ... } from '../controllers/appointmentController';
const validate_1 = require("../middlewares/validate");
const appointment_1 = require("../schemas/appointment");
const router = (0, express_1.Router)();
// Rutas de citas
// router.get('/', ...);
// router.get('/:id', ...);
router.post('/', (0, validate_1.validate)(appointment_1.createAppointmentSchema), (req, res) => {
    // El controlador recibirá los datos ya validados y transformados
    // La fecha starts_at será un objeto Date
    res.json({ message: 'Turno validado correctamente', data: req.body });
});
// router.put('/:id', ...);
// router.delete('/:id', ...);
exports.default = router;
