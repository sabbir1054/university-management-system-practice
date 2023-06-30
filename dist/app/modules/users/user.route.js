'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.UserRoutes = void 0;
const express_1 = __importDefault(require('express'));
const validedRequest_1 = __importDefault(
  require('../../middlewares/validedRequest')
);
const user_controller_1 = require('./user.controller');
const user_validation_1 = require('./user.validation');
const router = express_1.default.Router();
router.post(
  '/create-student',
  (0, validedRequest_1.default)(
    user_validation_1.UserValidation.createUserZodSchema
  ),
  user_controller_1.UserController.createStudent
);
router.post(
  '/create-faculty',
  (0, validedRequest_1.default)(
    user_validation_1.UserValidation.createFacultyZodSchema
  ),
  user_controller_1.UserController.createFaculty
);
router.post(
  '/create-admin',
  (0, validedRequest_1.default)(
    user_validation_1.UserValidation.createAdminZodSchema
  ),
  user_controller_1.UserController.createAdmin
);
exports.UserRoutes = router;
