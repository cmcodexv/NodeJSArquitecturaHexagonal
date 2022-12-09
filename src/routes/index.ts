
//rutas
export const routers = (app: { get: (arg0: string, arg1: any) => void; use: (arg0: string, arg1: any) => void; },) => {
    //ruta principal
    app.get('/', async (_req: any, res: { send: (arg0: string) => void; }) => {
        res.send("Run!");
    });
    //rutas de api
    app.use('/api/', require('../controllers'));

};





