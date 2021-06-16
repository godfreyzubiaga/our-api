"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apiResponse_1 = require("./../../../utils/apiResponse");
const express_1 = __importDefault(require("express"));
const apiResponse_2 = require("../../../utils/apiResponse");
const dummy = express_1.default.Router();
dummy.post('*', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    if (request.body.status === 200 || !request.body.status) {
        const dataResponse = Object.assign({}, request.body);
        delete dataResponse.status;
        response.status(apiResponse_2.SUCCESS).json(Object.assign(Object.assign({}, apiResponse_2.successAPIResponse()), { data: dataResponse, apiPath: request.path }));
    }
    else {
        const { errorMessage, errorCode } = request.body;
        response.status(request.body.status).json(Object.assign(Object.assign({}, apiResponse_2.failedAPIResponse(errorMessage, errorCode)), { apiPath: request.path }));
    }
}));
dummy.get('*', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    if (request.path.split('/')[1] === 'fail') {
        response.status(apiResponse_1.INTERNAL_SERVER_ERROR).json(Object.assign(Object.assign({}, apiResponse_2.failedAPIResponse('Failed dummy GET API.')), { apiPath: request.path }));
    }
    else {
        response.status(apiResponse_2.SUCCESS).json(Object.assign(Object.assign({}, apiResponse_2.successAPIResponse('Success dummy GET API!')), { apiPath: request.path }));
    }
}));
exports.default = dummy;
//# sourceMappingURL=index.js.map