import { expect } from 'chai';
import { Model } from 'mongoose';
import Sinon from 'sinon';
import Motorcycle from '../../../src/Domains/Motorcycle';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import MotorcycleService from '../../../src/Services/MotorcycleService';

describe('Testes da service de Motorcycle', function () {
  const motorcycleInput: Motorcycle = new Motorcycle({
    id: '6348513f34c397abcad040b2',
    model: 'Honda Cb 600f Hornet',
    year: 2005,
    color: 'Yellow',
    status: true,
    buyValue: 30.000,
    category: 'Street',
    engineCapacity: 600,
  });

  const motorcycleOutput: IMotorcycle = {
    model: 'Honda Cb 600f Hornet',
    year: 2005,
    color: 'Yellow',
    status: true,
    buyValue: 30.000,
    category: 'Street',
    engineCapacity: 600,
  };

  it('Deve cadastrar uma moto com sucesso', async function () {
    Sinon.stub(Model, 'create').resolves(motorcycleInput);

    const service = new MotorcycleService();
    const result = await service.register(motorcycleOutput);

    expect(result).to.be.deep.equal(motorcycleInput);
  });

  it('Acha uma moto com um id específico', async function () {
    Sinon.stub(Model, 'findById').resolves(motorcycleInput);

    const service = new MotorcycleService();
    const result = await service.getById('6348513f34c397abcad040b2');

    expect(result).to.be.deep.equal(motorcycleInput);
  });
  afterEach(function () {
    Sinon.restore();
  });
});