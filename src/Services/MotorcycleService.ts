import IMotorcycle from '../Interfaces/IMotorcycle';
import Motorcycler from '../Domains/Motorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

class MotorcycleSercice {
  private createmotorcycle(motorcycle: IMotorcycle | null): Motorcycler | null {
    if (motorcycle) {
      return new Motorcycler(motorcycle);
    }
    return null;
  }

  public async register(car: IMotorcycle) {
    const motorcycleODM = new MotorcycleODM();
    const newcar = await motorcycleODM.create(car);
    return this.createmotorcycle(newcar);
  }

  public async updateById(id: string, data: IMotorcycle) {
    const motorcycleODM = new MotorcycleODM();
    const updateById = await motorcycleODM.update(id, data);
    return this.createmotorcycle(updateById);
  }

  public async getAll() {
    const motorcycleODM = new MotorcycleODM();
    const allMotorcycle = await motorcycleODM.getAll();
    const allMotorcycleDomains = allMotorcycle
      .map((motorcycle) => this.createmotorcycle(motorcycle));
    return allMotorcycleDomains;
  }

  public async getById(id: string) {
    const motorcycleODM = new MotorcycleODM();
    const motorcycle = await motorcycleODM.findById(id);
    if (!motorcycle) throw new Error('Motorcycle not found');
    return motorcycle;
  }
}
export default MotorcycleSercice;