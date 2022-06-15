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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cars_fixture_1 = __importDefault(require("./cars.fixture"));
const waitFor = (seconds) => new Promise((resolve) => {
    setTimeout(resolve, seconds);
});
const route = {
    method: 'GET',
    path: '/cars',
    options: {
        handler: function (request, h) {
            return __awaiter(this, void 0, void 0, function* () {
                const query = request.query;
                const { sort_by, sort_order, page = 1, page_size = 10 } = query, filters = __rest(query, ["sort_by", "sort_order", "page", "page_size"]);
                const parsedPage = typeof page === 'string' ? parseInt(page) : page;
                const parsedPageSize = typeof page_size === 'string' ? parseInt(page_size) : page_size;
                const pageStart = (parsedPageSize * parsedPage) - parsedPageSize;
                const pageEnd = pageStart + parsedPageSize;
                let filteredCars = [...cars_fixture_1.default]; // use aa copy instead of the original
                Object.entries(filters).forEach(([token, val]) => {
                    filteredCars = filteredCars.filter((car) => car[token].toString().toLowerCase().startsWith(val.toLowerCase()));
                });
                const total = filteredCars.length;
                filteredCars = filteredCars.slice(pageStart, pageEnd);
                yield waitFor(1000);
                return h.response({
                    data: filteredCars,
                    total,
                });
            });
        },
    }
};
exports.default = route;
