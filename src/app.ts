import express, { Application } from 'express';
const app: Application = express();
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import router from './app/routes';

app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Application routes
app.use('/api/v1/', router);

//
app.get('/', (req, res) => {
  res.send('Welcome to the THR University Management System');
});

// global error handler
app.use(globalErrorHandler);

export default app;
