import { Router } from 'express';
import CarController from '../Controllers/CarController';
import ValidateID from '../Middlewares/ValidateID';
import MotorcycleController from '../Controllers/MotorcycleController';

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

routes.post('/motorcycles', (req, res, next) => new MotorcycleController(req, res, next).create());

routes.put(
  '/motorcycles/:id',
  (req, res, next) => new MotorcycleController(req, res, next).update(),
);

routes.get(
  '/motorcycles',
  (req, res, next) => new MotorcycleController(req, res, next).getAll(),
);

routes.get(
  '/motorcycles/:id',
  ValidateID.validate,
  (req, res, next) => new MotorcycleController(req, res, next).getById(),
);

export default routes;