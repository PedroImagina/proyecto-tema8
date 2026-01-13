"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendSuccess = sendSuccess;
exports.sendError = sendError;
/**
 * Envía una respuesta exitosa
 * @param res Objeto Response de Express
 * @param data Datos a enviar en la respuesta
 * @param message Mensaje opcional de éxito
 * @param statusCode Código de estado HTTP (por defecto 200)
 */
function sendSuccess(res, data, message, statusCode = 200) {
    const response = {
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
function sendError(res, error, statusCode = 500) {
    const errorMessage = error instanceof Error ? error.message : error;
    const response = {
        success: false,
        error: errorMessage,
    };
    res.status(statusCode).json(response);
}
