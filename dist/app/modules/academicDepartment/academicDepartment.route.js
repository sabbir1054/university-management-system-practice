"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicDepartmentRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validedRequest_1 = __importDefault(require("../../middlewares/validedRequest"));
const academicDepartment_controller_1 = require("./academicDepartment.controller");
const academicDepartment_validation_1 = require("./academicDepartment.validation");
const router = express_1.default.Router();
router.post('/create-department', (0, validedRequest_1.default)(academicDepartment_validation_1.AcademicDepartmentValidation.createAcademicDepartmentZodSchema), academicDepartment_controller_1.AcademicDepartmentController.createAcademicDepartment);
router.patch('/:id', (0, validedRequest_1.default)(academicDepartment_validation_1.AcademicDepartmentValidation.updateAcademicDepartmentZodSchema), academicDepartment_controller_1.AcademicDepartmentController.updateDepartment);
router.get('/:id', academicDepartment_controller_1.AcademicDepartmentController.getSingleDepartment);
router.delete('/:id', academicDepartment_controller_1.AcademicDepartmentController.deleteDepartment);
router.get('/', academicDepartment_controller_1.AcademicDepartmentController.getAllAcademicDepartment);
exports.AcademicDepartmentRoutes = router;
