import ICar from '../Interfaces/ICar';
import Car from '../Domains/Car';
import CarODM from '../Models/CarODM';

class CarService {
  private createCar(car: ICar | null): Car | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  public async register(car: ICar) {
    const carODM = new CarODM();
    const newcar = await carODM.create(car);
    return this.createCar(newcar);
  }

  public async getById(id: string) {
    const carODM = new CarODM();
    const car = await carODM.findById(id);
    if (!car) throw new Error('Car not found');
    return car;
  }

  public async getAll() {
    const carODM = new CarODM();
    const allCars = await carODM.getAll();
    const allCarsDomains = allCars.map((car) => this.createCar(car));
    return allCarsDomains;
  }

  public async updateById(id: string, carData: ICar) {
    const carODM = new CarODM();
    const updateCarById = await carODM.update(id, carData);
    return this.createCar(updateCarById);
  }
}
export default CarService;