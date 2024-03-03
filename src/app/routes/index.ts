import express from 'express';
import { userRoutes } from '../modules/user/user.route';
import { AcademicSemesterRoutes } from '../modules/academicSemester/academicSemester.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    route: userRoutes,
  },
  {
    path: '/academic-semester',
    route: AcademicSemesterRoutes,
  },
];

// router.use('/users', userRoutes);
// router.use('/academic-semester', AcademicSemesterRoutes);
moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
