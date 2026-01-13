"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testSchema = void 0;
const zod_1 = require("zod");
/**
 * Esquema simple de validación para test
 * Valida un objeto con nombre (string mínimo 2 caracteres) y edad (número entero positivo)
 */
exports.testSchema = zod_1.z.object({
    nombre: zod_1.z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
    edad: zod_1.z.number().int('La edad debe ser un número entero').positive('La edad debe ser un número positivo'),
});
