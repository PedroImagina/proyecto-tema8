import { Request, Response } from 'express';
import { sendSuccess } from '../utils/response';

/**
 * Controlador de prueba
 * @param req Objeto Request de Express
 * @param res Objeto Response de Express
 */
export function getTest(req: Request, res: Response): void {
  sendSuccess(res, { test: 'Prueba exitosa' }, 'Controlador de prueba funcionando correctamente');
}

/**
 * Controlador de prueba por ID
 * @param req Objeto Request de Express
 * @param res Objeto Response de Express
 */
export function getTestById(req: Request, res: Response): void {
  const { id } = req.params;
  sendSuccess(res, { id, test: 'Prueba por ID exitosa' }, `Controlador de prueba funcionando correctamente para el ID: ${id}`);
}

/**
 * Controlador de prueba con query strings
 * @param req Objeto Request de Express
 * @param res Objeto Response de Express
 */
export function getTestWithQuery(req: Request, res: Response): void {
  const queryParams = req.query;
  sendSuccess(res, { queryParams }, 'Query strings recibidos correctamente');
}

/**
 * Controlador para crear un test (POST)
 * @param req Objeto Request de Express
 * @param res Objeto Response de Express
 */
export function createTest(req: Request, res: Response): void {
  const body = req.body;
  sendSuccess(res, { created: body }, 'Test creado correctamente', 201);
}

