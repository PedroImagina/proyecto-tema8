"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const testController_1 = require("../controllers/testController");
const router = (0, express_1.Router)();
// Ruta GET / para prueba
router.get('/', testController_1.getTest);
// Ruta GET /query para manejar query strings
router.get('/query', testController_1.getTestWithQuery);
// Ruta GET /:id para prueba por ID
router.get('/:id', testController_1.getTestById);
// Ruta POST / para crear un nuevo test
router.post('/', testController_1.createTest);
exports.default = router;
