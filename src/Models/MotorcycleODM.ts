import { Schema } from 'mongoose';
import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import AbstractODM from './AbstractODM';

class MotorcycleODM extends AbstractODM<IMotorcycle> {
  constructor() {
    const motorcycleSchema = new Schema<IMotorcycle>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false, default: false },
      buyValue: { type: Number, required: true },
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
    });
    super(motorcycleSchema, 'Motorcycle');
  }

  public async update(id: string, obj: Partial<IMotorcycle>): Promise<IMotorcycle | null> {
    return this.model.findByIdAndUpdate(id, obj, { new: true });
  }

  public async getAll(): Promise<IMotorcycle[]> {
    return this.model.find();
  }

  public async findById(id: string): Promise<Motorcycle> {
    const motorcycle = await this.model.findById(id);

    if (!motorcycle) throw new Error('Motorcycle not found');

    return new Motorcycle(motorcycle);
  }
}

export default MotorcycleODM;
