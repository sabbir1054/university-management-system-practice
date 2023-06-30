'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const dotenv_1 = __importDefault(require('dotenv'));
const path_1 = __importDefault(require('path'));
dotenv_1.default.config({ path: path_1.default.join(process.cwd(), '.env') });
exports.default = {
  default_admin_pass: process.env.DEFAULT_ADMIN_PASS,
  default_faculty_pass: process.env.DEFAULT_FACULTY_PASS,
  default_student_pass: process.env.DEFAULT_STUDENT_PASS,
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  databaseUrl: process.env.DATABASE_URL,
  default_user_pass: process.env.USER_DEFAULT_PASS,
};
