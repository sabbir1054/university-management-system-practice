import express from 'express';
import validateRequest from '../../middlewares/validedRequest';
import { AcademicSemesterController } from './academicSemester.controller';
import { AcademicSemesterValidation } from './academicSemester.validation';

const router = express.Router();

router.post(
  '/create-semester',
  validateRequest(AcademicSemesterValidation.createAcademicSemesterZodSchema),
  AcademicSemesterController.createSemester
);

router.get('/', AcademicSemesterController.getAlSemesters);

router.get('/:id', AcademicSemesterController.getSingleSemester);

export const AcademicSemesterRoutes = router;
