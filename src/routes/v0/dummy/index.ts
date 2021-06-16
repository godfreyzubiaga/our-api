import { INTERNAL_SERVER_ERROR } from './../../../utils/apiResponse';
import express from 'express';

import { SUCCESS, failedAPIResponse, successAPIResponse } from '../../../utils/apiResponse';

const dummy = express.Router();

dummy.post('*', async (request, response) => {
  if (request.body.status === 200 || !request.body.status) {
    const dataResponse = {
      ...request.body,
    }
    delete dataResponse.status
    response.status(SUCCESS).json({ ...successAPIResponse(), data: dataResponse, apiPath: request.path });
  } else {
    const code = request.body.error?.code
    const message = request.body.error?.message
    response.status(request.body.status).json({ ...failedAPIResponse(message, code), apiPath: request.path });
  }
});

dummy.get('*', async (request, response) => {
  if (request.path.split('/')[1] === 'fail') {
    response.status(INTERNAL_SERVER_ERROR).json({ ...failedAPIResponse('Failed dummy GET API.'), apiPath: request.path });
  } else {
    response.status(SUCCESS).json({ ...successAPIResponse('Success dummy GET API!'), apiPath: request.path });
  }
});

export default dummy;
