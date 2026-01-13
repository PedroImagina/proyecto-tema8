"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginSchema = exports.registerSchema = void 0;
const zod_1 = require("zod");
/**
 * Esquema para el registro de usuario
 * Aplica transformaciones para sanitizar los datos
 */
exports.registerSchema = zod_1.z.object({
    name: zod_1.z
        .string()
        .min(2, 'El nombre debe tener al menos 2 caracteres')
        .trim(),
    email: zod_1.z
        .string()
        .email('Debe ser un email válido')
        .toLowerCase()
        .trim(),
    password: zod_1.z
        .string()
        .min(6, 'La contraseña debe tener al menos 6 caracteres')
        .trim(),
});
/**
 * Esquema para el login de usuario
 */
exports.loginSchema = zod_1.z.object({
    email: zod_1.z
        .string()
        .email('Debe ser un email válido')
        .toLowerCase()
        .trim(),
    password: zod_1.z
        .string()
        .min(1, 'La contraseña es requerida')
        .trim(),
});
