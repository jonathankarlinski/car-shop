import { Router } from 'express';
import CarController from '../Controllers/CarController';
import ValidateID from '../Middlewares/ValidateID';

const routes = Router();

routes.post('/cars', (req, res, next) => new CarController(req, res, next).create());

routes.get(
  '/cars',
  (req, res, next) => new CarController(req, res, next).getAll(),
);
routes.get(
  '/cars/:id',
  ValidateID.validate,
  (req, res, next) => new CarController(req, res, next).getById(),
);

routes.put(
  '/cars/:id',
  (req, res, next) => new CarController(req, res, next).update(),
);

export default routes;