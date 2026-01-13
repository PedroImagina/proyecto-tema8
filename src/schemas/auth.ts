import { z } from 'zod';

/**
 * Esquema para el registro de usuario
 * Aplica transformaciones para sanitizar los datos
 */
export const registerSchema = z.object({
  name: z
    .string()
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .trim(),
  email: z
    .string()
    .email('Debe ser un email válido')
    .toLowerCase()
    .trim(),
  password: z
    .string()
    .min(6, 'La contraseña debe tener al menos 6 caracteres')
    .trim(),
});

/**
 * Esquema para el login de usuario
 */
export const loginSchema = z.object({
  email: z
    .string()
    .email('Debe ser un email válido')
    .toLowerCase()
    .trim(),
  password: z
    .string()
    .min(1, 'La contraseña es requerida')
    .trim(),
});

