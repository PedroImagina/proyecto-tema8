import { Response } from 'express';

/**
 * Interfaz para las respuestas de la API
 */
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

/**
 * Envía una respuesta exitosa
 * @param res Objeto Response de Express
 * @param data Datos a enviar en la respuesta
 * @param message Mensaje opcional de éxito
 * @param statusCode Código de estado HTTP (por defecto 200)
 */
export function sendSuccess<T>(
  res: Response,
  data?: T,
  message?: string,
  statusCode: number = 200
): void {
  const response: ApiResponse<T> = {
    success: true,
    data,
    message,
  };

  res.status(statusCode).json(response);
}

/**
 * Envía una respuesta de error
 * @param res Objeto Response de Express
 * @param error Mensaje de error o objeto Error
 * @param statusCode Código de estado HTTP (por defecto 500)
 */
export function sendError(
  res: Response,
  error: string | Error,
  statusCode: number = 500
): void {
  const errorMessage = error instanceof Error ? error.message : error;

  const response: ApiResponse = {
    success: false,
    error: errorMessage,
  };

  res.status(statusCode).json(response);
}

