import mongoose from 'mongoose';
import { IGenericErrorMessage } from '../interfaces/error';
import { IGenericResponse } from '../interfaces/common';

const handleValidationError = (
  error: mongoose.Error.ValidationError,
): IGenericResponse => {
  const errors: IGenericErrorMessage[] = Object.values(error.errors).map(
    (el: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        path: el?.path,
        message: el?.message,
      };
    },
  );
  const statusCode = 400;

  return {
    statusCode,
    message: 'Validation error',
    errorMessages: errors,
  };
};

export default handleValidationError;
