import IVehcle from './IVehicle';

export default interface ICar extends IVehcle {
  doorsQty: number,
  seatsQty: number
}