import express from 'express';

import { SUCCESS, failedAPIResponse, successAPIResponse } from '../../../utils/apiResponse';

const dummy = express.Router();

dummy.post('*', async (request, response) => {
  if (request.body.status === 200 || !request.body.status) {
    const dataResponse = {
      ...request.body,
    }
    delete dataResponse.status
    response.status(SUCCESS).json({ ...successAPIResponse(), data: dataResponse });
  } else {
    const { errorMessage, errorCode } = request.body
    response.status(request.body.status).json({ ...failedAPIResponse(errorMessage, errorCode) });
  }
});

dummy.get('*', async (request, response) => {
  response.status(SUCCESS).json(successAPIResponse('Success dummy GET API!'));
});

export default dummy;
