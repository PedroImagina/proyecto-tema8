"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
exports.query = query;
exports.testConnection = testConnection;
const pg_1 = require("pg");
const env_1 = require("../config/env");
// Crear el pool de conexiones
exports.pool = new pg_1.Pool({
    connectionString: env_1.config.databaseUrl,
    // Opciones adicionales del pool
    max: 20, // máximo de clientes en el pool
    idleTimeoutMillis: 30000, // cerrar clientes inactivos después de 30 segundos
    connectionTimeoutMillis: 2000, // timeout para obtener una conexión del pool
});
// Función helper para realizar consultas
async function query(text, params) {
    const start = Date.now();
    try {
        const res = await exports.pool.query(text, params);
        const duration = Date.now() - start;
        console.log('Query ejecutada', { text, duration, rows: res.rowCount });
        return res;
    }
    catch (error) {
        console.error('Error en query', { text, error });
        throw error;
    }
}
// Función para verificar la conexión a la base de datos
async function testConnection() {
    try {
        const result = await exports.pool.query('SELECT NOW()');
        console.log('✅ Conexión a la base de datos exitosa');
        return true;
    }
    catch (error) {
        console.error('❌ Error al conectar con la base de datos:', error);
        return false;
    }
}
