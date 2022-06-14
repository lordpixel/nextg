"use strict";
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
const route = {
    method: 'GET',
    path: '/cars',
    options: {
        handler: function (request, h) {
            const query = request.query || {};
            debugger;
            const { sort_by, sort_order } = query, filters = __rest(query, ["sort_by", "sort_order"]);
            const page = query.page ? parseInt(query.page) : 1;
            const page_size = query.page_size ? parseInt(query.page_size) : 10;
            let filteredCars = [...cars_fixture_1.default]; // use a copy instead of the original
            Object.entries(filters).forEach(([token, val]) => {
                filteredCars = filteredCars.filter((car) => car[token]
                    .toString()
                    .toLowerCase()
                    .startsWith(val.toLowerCase()));
            });
            const total = filteredCars.length;
            // paginate
            const startIndex = (page_size * page) - page_size;
            const endIndex = startIndex + page_size;
            const log = {
                startIndex,
                endIndex,
                page,
                page_size
            };
            filteredCars = filteredCars.slice(startIndex, endIndex);
            // const response = {
            //     count:filteredCars.length,
            //     data: filteredCars,
            //     total,
            //     log,
            //     query
            // };
            // return h.response(response);
        },
    }
};
exports.default = route;
