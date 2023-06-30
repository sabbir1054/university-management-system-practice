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
Object.defineProperty(exports, '__esModule', { value: true });
exports.AcademicDepartmentService = void 0;
const paginationHelpers_1 = require('../../../helpers/paginationHelpers');
const academicDepartment_constants_1 = require('./academicDepartment.constants');
const academicDepartment_model_1 = require('./academicDepartment.model');
const createDepartmentToDB = payload =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = (yield academicDepartment_model_1.AcademicDepartment.create(
      payload
    )).populate('academicFaculty');
    return result;
  });
const getAllDepartmentFromDB = (paginationOptions, filters) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const { searchTerm } = filters,
      filtersData = __rest(filters, ['searchTerm']);
    const andConditions = [];
    if (searchTerm) {
      andConditions.push({
        $or: academicDepartment_constants_1.academicDepartmentSearchableFields.map(
          field => ({
            [field]: {
              $regex: searchTerm,
              $options: 'i',
            },
          })
        ),
      });
    }
    if (Object.keys(filtersData).length) {
      andConditions.push({
        $and: Object.entries(filtersData).map(([field, value]) => ({
          [field]: value,
        })),
      });
    }
    const { page, limit, skip, sortBy, sortOrder } =
      paginationHelpers_1.paginationHelpers.calculatePagination(
        paginationOptions
      );
    const sortConditions = {};
    if (sortBy && sortOrder) {
      sortConditions[sortBy] = sortOrder;
    }
    const whereConditions =
      andConditions.length > 0 ? { $and: andConditions } : {};
    const result = yield academicDepartment_model_1.AcademicDepartment.find(
      whereConditions
    )
      .sort(sortConditions)
      .skip(skip)
      .limit(limit);
    const total =
      yield academicDepartment_model_1.AcademicDepartment.countDocuments();
    return {
      meta: {
        page,
        limit,
        total,
      },
      data: result,
    };
  });
const getSingleDepartmentFromDB = id =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield academicDepartment_model_1.AcademicDepartment.findById(
      id
    );
    return result;
  });
const updateDepartmentToDB = (id, payload) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result =
      yield academicDepartment_model_1.AcademicDepartment.findByIdAndUpdate(
        id,
        payload,
        {
          new: true,
        }
      ).populate('academicFaculty');
    return result;
  });
const deleteDepartmentFromDB = id =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result =
      yield academicDepartment_model_1.AcademicDepartment.findByIdAndDelete(id);
    return result;
  });
exports.AcademicDepartmentService = {
  createDepartmentToDB,
  getAllDepartmentFromDB,
  getSingleDepartmentFromDB,
  updateDepartmentToDB,
  deleteDepartmentFromDB,
};
