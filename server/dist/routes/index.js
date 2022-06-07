'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const home_1 = __importDefault(require("./home"));
const cars_1 = __importDefault(require("./cars/cars"));
exports.routes = [
    home_1.default,
    cars_1.default
];
