import { NextFunction, Request, Response } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Services/MotorcycleService';

class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcycleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleService();
  }

  public async create() {
    const { model, color, year, status, buyValue, category, engineCapacity } = this.req.body;
    const motorcycle: IMotorcycle = {
      model,
      color,
      year,
      status,
      buyValue,
      category,
      engineCapacity,
    };

    try {
      const newmotorcycle = await this.service.register(motorcycle);
      return this.res.status(201).json(newmotorcycle);
    } catch (error) {
      this.next(error);
    }
  }
  
  public async update() {
    const { id } = this.req.params;
    const data = this.req.body;
    try {
      const updateById = await this.service.updateById(id, data);
      if (!updateById) return this.res.status(404).json({ message: 'Motorcycle not found' });
      return this.res.status(200).json(updateById);
    } catch (error) {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }
  }

  public async getAll() {
    try {
      const allMotorcycle = await this.service.getAll();
      return this.res.status(200).json(allMotorcycle);
    } catch (error) {
      this.next(error);
    }
  }

  public async getById() {
    const { id } = this.req.params;
    try {
      const motorcycle = await this.service.getById(id);
      return this.res.status(200).json(motorcycle);
    } catch (error) {
      if (error instanceof Error) return this.res.status(404).json({ message: error.message });
      this.next(error);
    }
  }
}
export default MotorcycleController;