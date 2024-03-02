import express, { Application } from 'express';
const app: Application = express();
import cors from 'cors';
import userRouter from './app/modules/user/user.route';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import { AcademicSemesterRoutes } from './app/modules/academicSemester/academicSemester.route';

app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Application routes

app.use('/api/v1/users', userRouter);
app.use('/api/v1/academic-semester', AcademicSemesterRoutes);

// app.get('/', async (req: Request, res: Response, next: NextFunction) => {
//   console.log(x)
// })

// global error handler
app.use(globalErrorHandler);

export default app;
