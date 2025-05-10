import { server } from './server';

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});

server.on('error', (err: any) => {
    console.error(err);
});



