import { Model, model, models, Schema } from 'mongoose';

export default abstract class AbstractODM<T> {
  private schema: Schema<T>;
  private _model: Model<T>;
  private modelName: string;

  constructor(schema: Schema<T>, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this._model = models[this.modelName] || model(this.modelName, this.schema);
  }

  protected get model(): Model<T> {
    return this._model;
  }
}