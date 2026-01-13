"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAppointmentSchema = void 0;
const zod_1 = require("zod");
/**
 * Esquema para crear un turno
 * Valida el ID del servicio y la fecha de inicio
 * Transforma la fecha automáticamente a un objeto Date
 */
exports.createAppointmentSchema = zod_1.z.object({
    service_id: zod_1.z
        .string()
        .uuid('El ID del servicio debe ser un UUID válido'),
    starts_at: zod_1.z.preprocess((arg) => {
        if (typeof arg === 'string' || arg instanceof Date) {
            return new Date(arg);
        }
        return arg;
    }, zod_1.z
        .date({
        message: 'La fecha debe ser una cadena ISO 8601 o un objeto Date',
    })
        .refine((date) => date > new Date(), {
        message: 'La fecha de inicio debe ser en el futuro',
    })),
});
