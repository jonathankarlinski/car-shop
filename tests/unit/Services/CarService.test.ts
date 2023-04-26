import { expect } from 'chai';
import { Model } from 'mongoose';
import Sinon from 'sinon';
import Car from '../../../src/Domains/Car';
import ICar from '../../../src/Interfaces/ICar';
import CarService from '../../../src/Services/CarService';

describe('Testes da service de Car', function () {
  const carInput: Car = new Car({
    id: '6348513f34c397abcad040b2',
    model: 'Marea',
    year: 2002,
    color: 'Black',
    status: true,
    buyValue: 15.990,
    doorsQty: 4,
    seatsQty: 5,
  });

  const carOutput: ICar = {
    model: 'Marea',
    year: 2002,
    color: 'Black',
    status: true,
    buyValue: 15.990,
    doorsQty: 4,
    seatsQty: 5,
  };

  const carList = [
    {
      id: '64487f431852311ef2e534b3',
      model: 'Gol bolinha',
      year: 2000,
      color: 'Black',
      status: true,
      buyValue: 15.000,
      doorsQty: 2,
      seatsQty: 5,
    },
    {
      id: '64457z441862712ff2e534b2',
      model: 'Opala',
      year: 1992,
      color: 'White',
      status: true,
      buyValue: 25.000,
      doorsQty: 2,
      seatsQty: 5,
    },
  ];

  it('Deve cadastrar um carro com sucesso', async function () {
    Sinon.stub(Model, 'create').resolves(carInput);

    const service = new CarService();
    const result = await service.register(carOutput);

    expect(result).to.be.deep.equal(carInput);
  });

  it('Retorna um carro com um id específico', async function () {
    Sinon.stub(Model, 'findById').resolves(carInput);

    const service = new CarService();
    const result = await service.getById('6348513f34c397abcad040b2');

    expect(result).to.be.deep.equal(carInput);
  });

  it('Retorna uma lista de carros', async function () {
    Sinon.stub(Model, 'find').resolves(carList);
    const service = new CarService();
    const result = await service.getAll();
    expect(result).to.be.deep.equal(carList);
  });

  afterEach(function () {
    Sinon.restore();
  });
});