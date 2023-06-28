import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  default_student_pass: process.env.DEFAULT_STUDENT_PASS,
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  databaseUrl: process.env.DATABASE_URL,
  default_user_pass: process.env.USER_DEFAULT_PASS,
};
