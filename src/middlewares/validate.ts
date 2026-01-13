import { Request, Response, NextFunction } from 'express';
import { ZodSchema, ZodError } from 'zod';
import { sendError } from '../utils/response';

/**
 * Middleware de validación que recibe un esquema de Zod
 * y valida las solicitudes entrantes
 */
export function validate(schema: ZodSchema) {
  return (req: Request, res: Response, next: NextFunction): void => {
    try {
      // Validar el body de la solicitud con el esquema
      const validatedData = schema.parse(req.body);
      
      // Reemplazar el body con los datos validados (incluye transformaciones)
      req.body = validatedData;
      
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        // Capturar errores de validación y enviar respuesta adecuada
        const errors = error.issues.map((err) => ({
          path: err.path.map(String).join('.'),
          message: err.message,
        }));
        
        const errorMessage = `Error de validación: ${errors.map((e) => e.message).join(', ')}`;
        sendError(res, errorMessage, 400);
      } else {
        // Error inesperado
        sendError(res, 'Error interno del servidor', 500);
      }
    }
  };
}

