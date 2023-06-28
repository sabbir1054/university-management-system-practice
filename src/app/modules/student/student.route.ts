import express from 'express';
import { StudentsController } from './student.controller';

const router = express.Router();

router.get('/', StudentsController.getAllStudents);
router.get('/:id', StudentsController.getSingleStudent);
router.patch('/:id', StudentsController.updateStudent);
router.delete('/:id', StudentsController.deleteStudent);

export const StudentRoutes = router;
