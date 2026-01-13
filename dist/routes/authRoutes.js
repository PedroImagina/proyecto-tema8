"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// import { ... } from '../controllers/authController';
const validate_1 = require("../middlewares/validate");
const auth_1 = require("../schemas/auth");
const router = (0, express_1.Router)();
// Rutas de autenticación
// router.post('/login', validate(loginSchema), ...);
router.post('/register', (0, validate_1.validate)(auth_1.registerSchema), (req, res) => {
    // El controlador recibirá los datos ya validados y transformados
    res.json({ message: 'Registro validado correctamente', data: req.body });
});
router.post('/login', (0, validate_1.validate)(auth_1.loginSchema), (req, res) => {
    // El controlador recibirá los datos ya validados y transformados
    res.json({ message: 'Login validado correctamente', data: req.body });
});
exports.default = router;
