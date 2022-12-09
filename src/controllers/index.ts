
import { Router } from 'express';
import { GetAll } from '../domain/services/service-employee';

const router = Router();
router.get('/employees', GetAll);

module.exports = router;






