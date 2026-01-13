"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTest = getTest;
exports.getTestById = getTestById;
exports.getTestWithQuery = getTestWithQuery;
exports.createTest = createTest;
const response_1 = require("../utils/response");
/**
 * Controlador de prueba
 * @param req Objeto Request de Express
 * @param res Objeto Response de Express
 */
function getTest(req, res) {
    (0, response_1.sendSuccess)(res, { test: 'Prueba exitosa' }, 'Controlador de prueba funcionando correctamente');
}
/**
 * Controlador de prueba por ID
 * @param req Objeto Request de Express
 * @param res Objeto Response de Express
 */
function getTestById(req, res) {
    const { id } = req.params;
    (0, response_1.sendSuccess)(res, { id, test: 'Prueba por ID exitosa' }, `Controlador de prueba funcionando correctamente para el ID: ${id}`);
}
/**
 * Controlador de prueba con query strings
 * @param req Objeto Request de Express
 * @param res Objeto Response de Express
 */
function getTestWithQuery(req, res) {
    const queryParams = req.query;
    (0, response_1.sendSuccess)(res, { queryParams }, 'Query strings recibidos correctamente');
}
/**
 * Controlador para crear un test (POST)
 * @param req Objeto Request de Express
 * @param res Objeto Response de Express
 */
function createTest(req, res) {
    const body = req.body;
    (0, response_1.sendSuccess)(res, { created: body }, 'Test creado correctamente', 201);
}
