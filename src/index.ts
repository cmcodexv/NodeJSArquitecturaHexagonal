import { server } from './server';
const config = require('config-yml');

const PORT = config.nodePort;

server.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});

server.on('error', (err: any) => {
    console.error(err);
});



