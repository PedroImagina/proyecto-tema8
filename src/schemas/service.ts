import { z } from 'zod';

/**
 * Esquema para crear un servicio
 */
export const createServiceSchema = z.object({
  name: z
    .string()
    .min(1, 'El nombre del servicio es requerido')
    .trim(),
  duration_minutes: z
    .number()
    .int('La duración debe ser un número entero')
    .positive('La duración debe ser un número positivo'),
});

/**
 * Esquema para actualizar un servicio
 * Todos los campos son opcionales para permitir actualizaciones parciales
 */
export const updateServiceSchema = z.object({
  name: z
    .string()
    .min(1, 'El nombre del servicio es requerido')
    .trim()
    .optional(),
  duration_minutes: z
    .number()
    .int('La duración debe ser un número entero')
    .positive('La duración debe ser un número positivo')
    .optional(),
}).refine(
  (data) => data.name !== undefined || data.duration_minutes !== undefined,
  {
    message: 'Al menos un campo debe ser proporcionado para actualizar',
  }
);

