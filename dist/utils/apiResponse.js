"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NOT_IMPLEMENTED = exports.INTERNAL_SERVER_ERROR = exports.NOT_FOUND = exports.UNAUTHORIZED = exports.BAD_REQUEST = exports.NO_CONTENT = exports.CREATED = exports.SUCCESS = exports.successAPIResponse = exports.failedAPIResponse = void 0;
const failedAPIResponse = (message, code) => ({
    success: false,
    error: {
        code,
        message
    },
});
exports.failedAPIResponse = failedAPIResponse;
const successAPIResponse = (message) => ({
    success: true,
    message,
});
exports.successAPIResponse = successAPIResponse;
exports.SUCCESS = 200;
exports.CREATED = 201;
exports.NO_CONTENT = 204;
exports.BAD_REQUEST = 400;
exports.UNAUTHORIZED = 401;
exports.NOT_FOUND = 404;
exports.INTERNAL_SERVER_ERROR = 500;
exports.NOT_IMPLEMENTED = 501;
//# sourceMappingURL=apiResponse.js.map