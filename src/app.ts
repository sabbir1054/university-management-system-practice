import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import routes from './app/routes/index';
const app: Application = express();

app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
// app.use('/api/v1/users/', UserRoutes);
// app.use('/api/v1/academic-semesters/', AcademicSemesterRoutes);
app.use('/api/v1/', routes);

// testing
app.get('/', async (req: Request, res: Response) => {
  res.send('Server is running');
  // Promise.reject(new Error('Unhandled Promise Rejection'));
});

// global error handler middleware
app.use(globalErrorHandler);
export default app;
