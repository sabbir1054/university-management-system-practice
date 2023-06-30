'use strict';
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (
          e.indexOf(p[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(s, p[i])
        )
          t[p[i]] = s[p[i]];
      }
    return t;
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.AcademicDepartmentController = void 0;
const http_status_1 = __importDefault(require('http-status'));
const paginationFields_1 = require('../../../constants/paginationFields');
const catchAsync_1 = __importDefault(require('../../../shared/catchAsync'));
const pick_1 = __importDefault(require('../../../shared/pick'));
const sendResponse_1 = __importDefault(require('../../../shared/sendResponse'));
const academicDepartment_constants_1 = require('./academicDepartment.constants');
const academicDepartment_service_1 = require('./academicDepartment.service');
const createAcademicDepartment = (0, catchAsync_1.default)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const academicDepartmentData = __rest(req.body, []);
    const result =
      yield academicDepartment_service_1.AcademicDepartmentService.createDepartmentToDB(
        academicDepartmentData
      );
    (0, sendResponse_1.default)(res, {
      statusCode: http_status_1.default.OK,
      success: true,
      message: 'Academic Department created Successfully',
      data: result,
    });
  })
);
const getAllAcademicDepartment = (0, catchAsync_1.default)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const filters = (0, pick_1.default)(
      req.query,
      academicDepartment_constants_1.academicDepartmentFilterableFields
    );
    const paginationOptions = (0, pick_1.default)(
      req.query,
      paginationFields_1.paginationFields
    );
    const result =
      yield academicDepartment_service_1.AcademicDepartmentService.getAllDepartmentFromDB(
        paginationOptions,
        filters
      );
    (0, sendResponse_1.default)(res, {
      statusCode: http_status_1.default.OK,
      success: true,
      message: 'Department retrieved successfully',
      meta: result.meta,
      data: result.data,
    });
  })
);
const getSingleDepartment = (0, catchAsync_1.default)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result =
      yield academicDepartment_service_1.AcademicDepartmentService.getSingleDepartmentFromDB(
        id
      );
    (0, sendResponse_1.default)(res, {
      statusCode: http_status_1.default.OK,
      success: true,
      message: 'Department retrieved successfully',
      data: result,
    });
  })
);
const updateDepartment = (0, catchAsync_1.default)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result =
      yield academicDepartment_service_1.AcademicDepartmentService.updateDepartmentToDB(
        id,
        req.body
      );
    (0, sendResponse_1.default)(res, {
      statusCode: http_status_1.default.OK,
      success: true,
      message: 'Academic Department updated successfully',
      data: result,
    });
  })
);
const deleteDepartment = (0, catchAsync_1.default)((req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result =
      yield academicDepartment_service_1.AcademicDepartmentService.deleteDepartmentFromDB(
        id
      );
    (0, sendResponse_1.default)(res, {
      statusCode: http_status_1.default.OK,
      success: true,
      message: 'Department deleted successfully',
      data: result,
    });
  })
);
exports.AcademicDepartmentController = {
  createAcademicDepartment,
  getAllAcademicDepartment,
  getSingleDepartment,
  updateDepartment,
  deleteDepartment,
};
