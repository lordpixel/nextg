import {Request, ResponseToolkit, ServerRoute } from '@hapi/hapi';

const route: ServerRoute = {
    method: 'GET',
    path: '/',
    options: {
        handler: function (request: Request, h: ResponseToolkit) {

            return h.response('success');
        }
    }
};

export default route;