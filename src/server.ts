import app from './app';
import { config } from './config/env';
import { testConnection } from './db/pool';

const PORT = config.port;

// Verificar conexión a la base de datos antes de iniciar el servidor
testConnection()
  .then((connected) => {
    if (connected) {
      app.listen(PORT, () => {
        console.log(`Servidor corriendo en http://localhost:${PORT}`);
      });
    } else {
      console.error('No se pudo conectar a la base de datos. El servidor no se iniciará.');
      process.exit(1);
    }
  })
  .catch((error) => {
    console.error('Error al verificar la conexión:', error);
    process.exit(1);
  });

