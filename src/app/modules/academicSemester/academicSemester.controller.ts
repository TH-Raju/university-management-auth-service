import { Request, Response } from 'express';
import { AcademicSemestersService } from './academicSemester.service';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';

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

export const AcademicSemesterController = {
  createSemester,
};
