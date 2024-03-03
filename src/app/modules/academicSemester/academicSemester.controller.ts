import { Request, Response } from 'express';
import { AcademicSemestersService } from './academicSemester.service';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import pick from '../../../shared/pick';
import { paginationFields } from '../../../constants/pagination';
import { IAcademicSemester } from './academicSemester.interface';

const createSemester = catchAsync(async (req: Request, res: Response) => {
  const { ...academicSemester } = req.body;
  const result =
    await AcademicSemestersService.createSemester(academicSemester);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Semester is created successfully',
    data: result,
  });
});

const getAllSemesters = catchAsync(async (req: Request, res: Response) => {
  const paginationOptions = pick(req.query, paginationFields);

  const result =
    await AcademicSemestersService.getAllSemester(paginationOptions);

  sendResponse<IAcademicSemester[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Semesters fetched successfully',
    meta: result.meta,
    data: result.data,
  });
});

export const AcademicSemesterController = {
  createSemester,
  getAllSemesters,
};
