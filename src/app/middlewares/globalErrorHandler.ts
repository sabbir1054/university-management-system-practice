/* eslint-disable no-unused-vars */
import { ErrorRequestHandler } from 'express';
import config from '../../config';
import ApiError from '../../errors/ApiErrors';
import handleValidationError from '../../errors/handleValidationError';
import { errorLogger } from '../../shared/logger';
import { IGenericErrorMessage } from './../../interfaces/error';

// global error handler
const globalErrorHandler: ErrorRequestHandler = (error, req, res, next) => {
  // eslint-disable-next-line no-unused-expressions
  config.env === 'development'
    ? console.log('📌 Global Error Handler ~', error)
    : errorLogger.error('📌 Global Error Handler ~', error);

  let statusCode = 500;
  let message = 'Something went wrong ! ';
  let errorMessages: IGenericErrorMessage[] = [];

  if (error?.name === 'ValidationError') {
    const simplifiedError = handleValidationError(error);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorMessages = simplifiedError.errorMessages;
  } else if (error instanceof ApiError) {
    statusCode = error?.statusCode;
    message = error?.message;
    errorMessages = error?.message
      ? [{ path: '', message: error?.message }]
      : [];
  } else if (error instanceof Error) {
    message = error?.message;
    errorMessages = error?.message
      ? [{ path: '', message: error?.message }]
      : [];
  }

  res.status(statusCode).json({
    success: false,
    message,
    errorMessages,
    stack: config.env !== 'production' ? error?.stack : undefined,
  });
  next();
};

export default globalErrorHandler;
