'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.AcademicFacultiesRoutes = void 0;
const express_1 = __importDefault(require('express'));
const validedRequest_1 = __importDefault(
  require('../../middlewares/validedRequest')
);
const academicFaculty_controller_1 = require('./academicFaculty.controller');
const academicFaculty_validation_1 = require('./academicFaculty.validation');
const router = express_1.default.Router();
router.post(
  '/create-faculty',
  (0, validedRequest_1.default)(
    academicFaculty_validation_1.AcademicFacultyValidation
      .createFacultyZodSchema
  ),
  academicFaculty_controller_1.AcademicFacultyController.createAcademicFaculty
);
router.get(
  '/:id',
  academicFaculty_controller_1.AcademicFacultyController.getSingleFaculty
);
router.delete(
  '/:id',
  academicFaculty_controller_1.AcademicFacultyController.deleteFaculty
);
router.patch(
  '/:id',
  (0, validedRequest_1.default)(
    academicFaculty_validation_1.AcademicFacultyValidation
      .updateFacultyZodSchema
  ),
  academicFaculty_controller_1.AcademicFacultyController.updateFaculty
);
router.get(
  '/',
  academicFaculty_controller_1.AcademicFacultyController.getAllAcademicFaculty
);
exports.AcademicFacultiesRoutes = router;
