import { json, urlencoded } from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';

import v0 from './routes/v0/dummy';
import { failedAPIResponse, NOT_FOUND } from './utils/apiResponse';

const corsOption = {
  origin: '*',
  optionSuccessStatus: 200,
};

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();
app.use(cors(corsOption));
app.use(urlencoded({ extended: true }));
app.use(json());
app.use(morgan('combined'));
app.use('/v0', v0);

app.listen(port, () => {
  console.log('App is live @', port);
});
