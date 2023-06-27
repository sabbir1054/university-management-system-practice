import express from 'express';
import { StudentsController } from './student.controller';

const router = express.Router();

router.get('/', StudentsController.getAllStudents);

export const StudentRoutes = router;
