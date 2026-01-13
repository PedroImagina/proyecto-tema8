"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// import { ... } from '../controllers/serviceController';
const validate_1 = require("../middlewares/validate");
const service_1 = require("../schemas/service");
const router = (0, express_1.Router)();
// Rutas de servicios
// router.get('/', ...);
// router.get('/:id', ...);
router.post('/', (0, validate_1.validate)(service_1.createServiceSchema), (req, res) => {
    // El controlador recibirá los datos ya validados
    res.json({ message: 'Servicio validado correctamente', data: req.body });
});
router.put('/:id', (0, validate_1.validate)(service_1.updateServiceSchema), (req, res) => {
    // El controlador recibirá los datos ya validados
    res.json({ message: 'Actualización de servicio validada correctamente', data: req.body });
});
// router.delete('/:id', ...);
exports.default = router;
