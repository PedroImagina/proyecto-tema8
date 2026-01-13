"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = validate;
const zod_1 = require("zod");
const response_1 = require("../utils/response");
/**
 * Middleware de validación que recibe un esquema de Zod
 * y valida las solicitudes entrantes
 */
function validate(schema) {
    return (req, res, next) => {
        try {
            // Validar el body de la solicitud con el esquema
            const validatedData = schema.parse(req.body);
            // Reemplazar el body con los datos validados (incluye transformaciones)
            req.body = validatedData;
            next();
        }
        catch (error) {
            if (error instanceof zod_1.ZodError) {
                // Capturar errores de validación y enviar respuesta adecuada
                const errors = error.issues.map((err) => ({
                    path: err.path.map(String).join('.'),
                    message: err.message,
                }));
                const errorMessage = `Error de validación: ${errors.map((e) => e.message).join(', ')}`;
                (0, response_1.sendError)(res, errorMessage, 400);
            }
            else {
                // Error inesperado
                (0, response_1.sendError)(res, 'Error interno del servidor', 500);
            }
        }
    };
}
