import { z } from 'zod';

/**
 * Esquema para crear un turno
 * Valida el ID del servicio y la fecha de inicio
 * Transforma la fecha automáticamente a un objeto Date
 */
export const createAppointmentSchema = z.object({
  service_id: z
    .string()
    .uuid('El ID del servicio debe ser un UUID válido'),
  starts_at: z.preprocess(
    (arg) => {
      if (typeof arg === 'string' || arg instanceof Date) {
        return new Date(arg);
      }
      return arg;
    },
    z
      .date({
        message: 'La fecha debe ser una cadena ISO 8601 o un objeto Date',
      })
      .refine((date) => date > new Date(), {
        message: 'La fecha de inicio debe ser en el futuro',
      })
  ),
});

