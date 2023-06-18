import { SortOrder } from 'mongoose';
import { paginationHelpers } from '../../../helpers/paginationHelpers';
import { IGenericResponse } from '../../../interfaces/common';
import IPaginationOptions from '../../../interfaces/paginations';
import { academicFacultySearchableFields } from './academicFaculty.constants';
import {
  IAcademicFaculty,
  IAcademicFacultyFilters,
} from './academicFaculty.interface';
import { AcademicFaculty } from './academicFaculty.model';

const createFacultyToDB = async (
  payload: IAcademicFaculty
): Promise<IAcademicFaculty | null> => {
  const result = await AcademicFaculty.create(payload);
  return result;
};

const getAllFacultyFromDB = async (
  paginationOptions: IPaginationOptions,
  filters: IAcademicFacultyFilters
): Promise<IGenericResponse<IAcademicFaculty[]>> => {
  const { searchTerm, ...filtersData } = filters;

  const andConditions = [];

  if (searchTerm) {
    andConditions.push({
      $or: academicFacultySearchableFields.map(field => ({
        [field]: {
          $regex: searchTerm,
          $options: 'i',
        },
      })),
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
    paginationHelpers.calculatePagination(paginationOptions);

  const sortConditions: { [key: string]: SortOrder } = {};
  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }

  const whereConditions =
    andConditions.length > 0 ? { $and: andConditions } : {};

  const result = await AcademicFaculty.find(whereConditions)
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);
  const total = await AcademicFaculty.countDocuments();
  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const getSingleFacultyFromDB = async (
  id: string
): Promise<IAcademicFaculty | null> => {
  const result = await AcademicFaculty.findById(id);
  return result;
};

const updateFacultyToDB = async (
  id: string,
  payload: Partial<IAcademicFaculty>
): Promise<IAcademicFaculty | null> => {
  const result = await AcademicFaculty.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return result;
};

export const AcademicFacultyService = {
  createFacultyToDB,
  getAllFacultyFromDB,
  getSingleFacultyFromDB,
  updateFacultyToDB,
};
