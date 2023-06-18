import express from 'express';
import validateRequest from '../../middlewares/validedRequest';
import { AcademicFacultyController } from './academicFaculty.controller';
import { AcademicFacultyValidation } from './academicFaculty.validation';

const router = express.Router();

router.post(
  '/create-faculty',
  validateRequest(AcademicFacultyValidation.createFacultyZodSchema),
  AcademicFacultyController.createAcademicFaculty
);

router.get('/:id', AcademicFacultyController.getSingleFaculty);
router.delete('/:id', AcademicFacultyController.deleteFaculty);
router.patch(
  '/:id',
  validateRequest(AcademicFacultyValidation.updateFacultyZodSchema),
  AcademicFacultyController.updateFaculty
);
router.get('/', AcademicFacultyController.getAllAcademicFaculty);

export const AcademicFacultiesRoutes = router;
