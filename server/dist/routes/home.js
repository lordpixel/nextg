"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const route = {
    method: 'GET',
    path: '/',
    options: {
        handler: function (request, h) {
            return h.response('success');
        }
    }
};
exports.default = route;
