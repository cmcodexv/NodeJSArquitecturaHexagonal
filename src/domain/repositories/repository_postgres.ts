// import { Client } from 'pg';
import { Pool } from 'pg';
require('dotenv').config()
const config = require('config-yml');


export const db = new Pool({
  host: process.env.PG_HOST,
  port: config.services.db.port,
  user: process.env.PG_USER,
  password: config.services.db.environment.POSTGRES_PASSWORD,
  database: process.env.PG_DATABASE
});

// Para probar la conexión quitar comentarios de esta sección y de la iportación de client

// (async () => {
//   const client = new Client({
//     host: process.env.PG_HOST,
//     port: process.env.PG_PORT,
//     user: process.env.PG_USER,
//     password: process.env.PG_PASSWORD,
//     database: process.env.PG_DATABASE,
//     ssl: true,
//   });
//   await client.connect();
//   const res = await client.query('SELECT $1::text as connected', ['Connection to postgres successful!']);
//   console.log(res.rows[0].connected);
//   await client.end();
// })();


// Correr el comando en la terminal: "node ./src/repositories/repository_postgres.ts"


