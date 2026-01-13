"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateServiceSchema = exports.createServiceSchema = void 0;
const zod_1 = require("zod");
/**
 * Esquema para crear un servicio
 */
exports.createServiceSchema = zod_1.z.object({
    name: zod_1.z
        .string()
        .min(1, 'El nombre del servicio es requerido')
        .trim(),
    duration_minutes: zod_1.z
        .number()
        .int('La duración debe ser un número entero')
        .positive('La duración debe ser un número positivo'),
});
/**
 * Esquema para actualizar un servicio
 * Todos los campos son opcionales para permitir actualizaciones parciales
 */
exports.updateServiceSchema = zod_1.z.object({
    name: zod_1.z
        .string()
        .min(1, 'El nombre del servicio es requerido')
        .trim()
        .optional(),
    duration_minutes: zod_1.z
        .number()
        .int('La duración debe ser un número entero')
        .positive('La duración debe ser un número positivo')
        .optional(),
}).refine((data) => data.name !== undefined || data.duration_minutes !== undefined, {
    message: 'Al menos un campo debe ser proporcionado para actualizar',
});
