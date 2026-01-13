"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const env_1 = require("./config/env");
const pool_1 = require("./db/pool");
const PORT = env_1.config.port;
// Verificar conexión a la base de datos antes de iniciar el servidor
(0, pool_1.testConnection)()
    .then((connected) => {
    if (connected) {
        app_1.default.listen(PORT, () => {
            console.log(`Servidor corriendo en http://localhost:${PORT}`);
        });
    }
    else {
        console.error('No se pudo conectar a la base de datos. El servidor no se iniciará.');
        process.exit(1);
    }
})
    .catch((error) => {
    console.error('Error al verificar la conexión:', error);
    process.exit(1);
});
