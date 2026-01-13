import { z } from 'zod';

/**
 * Esquema simple de validación para test
 * Valida un objeto con nombre (string mínimo 2 caracteres) y edad (número entero positivo)
 */
export const testSchema = z.object({
  nombre: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  edad: z.number().int('La edad debe ser un número entero').positive('La edad debe ser un número positivo'),
});

