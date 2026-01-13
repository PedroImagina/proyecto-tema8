import { Pool, QueryResult } from 'pg';
import { config } from '../config/env';

// Crear el pool de conexiones
export const pool = new Pool({
  connectionString: config.databaseUrl,
  // Opciones adicionales del pool
  max: 20, // máximo de clientes en el pool
  idleTimeoutMillis: 30000, // cerrar clientes inactivos después de 30 segundos
  connectionTimeoutMillis: 2000, // timeout para obtener una conexión del pool
});

// Función helper para realizar consultas
export async function query(
  text: string,
  params?: any[]
): Promise<QueryResult> {
  const start = Date.now();
  try {
    const res = await pool.query(text, params);
    const duration = Date.now() - start;
    console.log('Query ejecutada', { text, duration, rows: res.rowCount });
    return res;
  } catch (error) {
    console.error('Error en query', { text, error });
    throw error;
  }
}

// Función para verificar la conexión a la base de datos
export async function testConnection(): Promise<boolean> {
  try {
    const result = await pool.query('SELECT NOW()');
    console.log('✅ Conexión a la base de datos exitosa');
    return true;
  } catch (error) {
    console.error('❌ Error al conectar con la base de datos:', error);
    return false;
  }
}

