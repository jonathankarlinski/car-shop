import { Schema } from 'mongoose';
import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import AbstractODM from './AbstractODM';

class CarODM extends AbstractODM<ICar> {
  constructor() {
    const carSchema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false, default: false },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    super(carSchema, 'Car');
  }

  public async findById(id: string): Promise<Car> {
    const car = await this.model.findById(id);

    if (!car) throw new Error('Car not found');

    return new Car(car);
  }

  public async getAll(): Promise<ICar[]> {
    return this.model.find();
  }
}

export default CarODM;