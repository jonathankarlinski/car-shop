import Vehicle from './Vehicle';
import IMotorcycle from '../Interfaces/IMotorcycle';

class Motorcycle extends Vehicle {
  private category: string;
  private engineCapacity: number;

  constructor(motorcycleParameters: IMotorcycle) {
    super(motorcycleParameters);
    this.category = motorcycleParameters.category;
    this.engineCapacity = motorcycleParameters.engineCapacity;
  }
}
export default Motorcycle;