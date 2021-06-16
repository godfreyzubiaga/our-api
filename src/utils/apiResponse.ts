interface APIResponse {
  success: boolean
  error?: Error | string
  message?: string
}

interface Error {
  code?: number
  message: string
}

export const failedAPIResponse = (message: string, code?: number): APIResponse => ({
  success: false,
  error: {
    code,
    message
  },
});

export const successAPIResponse = (message?: string): APIResponse => ({
  success: true,
  message,
});

export const SUCCESS = 200;
export const CREATED = 201;
export const NO_CONTENT = 204;
export const BAD_REQUEST = 400;
export const UNAUTHORIZED = 401;
export const NOT_FOUND = 404;
export const INTERNAL_SERVER_ERROR = 500;
export const NOT_IMPLEMENTED = 501;
