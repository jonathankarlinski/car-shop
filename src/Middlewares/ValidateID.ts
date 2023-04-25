import { NextFunction, Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';

class ValidateID {
  public static validate(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    const { id } = req.params;
    if (!isValidObjectId(id)) return res.status(422).json({ message: 'Invalid mongo id' });

    next();
  }
}

export default ValidateID;