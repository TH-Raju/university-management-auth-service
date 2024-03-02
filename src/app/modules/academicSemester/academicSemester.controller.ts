import { RequestHandler } from 'express';
import { AcademicSemestersService } from './academicSemester.service';

const createSemester: RequestHandler = async (req, res, next) => {
  try {
    const { ...academicSemester } = req.body;
    const result =
      await AcademicSemestersService.createSemester(academicSemester);
    res.status(200).json({
      success: true,
      message: 'Academic Semester is created successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const AcademicSemesterController = {
  createSemester,
};
