import { expect } from 'chai';
import { Model } from 'mongoose';
import Sinon from 'sinon';
import Motorcycle from '../../../src/Domains/Motorcycle';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import MotorcycleService from '../../../src/Services/MotorcycleService';

describe('Testes da service de Motorcycle', function () {
  const modelHonda = 'Honda Cb 600f Hornet';

  const motorcycleInput: Motorcycle = new Motorcycle({
    id: '6348513f34c397abcad040b2',
    model: modelHonda,
    year: 2005,
    color: 'Yellow',
    status: true,
    buyValue: 30.000,
    category: 'Street',
    engineCapacity: 600,
  });

  const motorcycleOutput: IMotorcycle = {
    model: modelHonda,
    year: 2005,
    color: 'Yellow',
    status: true,
    buyValue: 30.000,
    category: 'Street',
    engineCapacity: 600,
  };

  const motoList = [
    {
      id: '64487f431852311ef2e534b3',
      model: 'Honda CG 125',
      year: 2010,
      color: 'Black',
      status: true,
      buyValue: 15.000,
      category: 'Street',
      engineCapacity: 300,
    },
    {
      id: '64457z441862712ff2e534b2',
      model: modelHonda,
      year: 2005,
      color: 'White',
      status: true,
      buyValue: 25.000,
      category: 'Street',
      engineCapacity: 600,
    },
  ];

  it('Deve cadastrar uma moto com sucesso', async function () {
    Sinon.stub(Model, 'create').resolves(motorcycleInput);

    const service = new MotorcycleService();
    const result = await service.register(motorcycleOutput);

    expect(result).to.be.deep.equal(motorcycleInput);
  });

  it('Retorna uma moto com um id específico', async function () {
    Sinon.stub(Model, 'findById').resolves(motorcycleInput);

    const service = new MotorcycleService();
    const result = await service.getById('6348513f34c397abcad040b2');

    expect(result).to.be.deep.equal(motorcycleInput);
  });

  it('Retorna uma lista de motos', async function () {
    Sinon.stub(Model, 'find').resolves(motoList);
    const service = new MotorcycleService();
    const result = await service.getAll();
    expect(result).to.be.deep.equal(motoList);
  });
  
  afterEach(function () {
    Sinon.restore();
  });
});