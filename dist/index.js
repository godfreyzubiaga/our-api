"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = require("body-parser");
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const dummy_1 = __importDefault(require("./routes/v0/dummy"));
const corsOption = {
    origin: '*',
    optionSuccessStatus: 200,
};
dotenv_1.default.config();
const port = process.env.PORT || 3000;
const app = express_1.default();
app.use(cors_1.default(corsOption));
app.use(body_parser_1.urlencoded({ extended: true }));
app.use(body_parser_1.json());
app.use(morgan_1.default('combined'));
app.use('/v0', dummy_1.default);
app.listen(port, () => {
    console.log('App is live @', port);
});
//# sourceMappingURL=index.js.map