/**
 * Tipo para los roles de usuario
 */
export type UserRole = 'admin' | 'user';

/**
 * Interfaz para representar un usuario
 */
export interface User {
  id: number;
  name: string;
  email: string;
  role: UserRole;
}

/**
 * Interfaz para representar un servicio
 */
export interface Service {
  id: number;
  name: string;
  duration_minutes: number;
}

