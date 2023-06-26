import IVehcle from '../Interfaces/IVehicle';

class Vehicle {
  protected id?: string;
  protected model: string;
  protected year: number;
  protected color: string;
  private status?: boolean;
  protected buyValue: number;
  
  constructor(vehicleParameters: IVehcle) {
    this.id = vehicleParameters.id;
    this.model = vehicleParameters.model;
    this.year = vehicleParameters.year;
    this.color = vehicleParameters.color;
    this.buyValue = vehicleParameters.buyValue;
    this.status = vehicleParameters.status;
  }
}
export default Vehicle;