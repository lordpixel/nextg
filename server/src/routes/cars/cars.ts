import {Request, ResponseToolkit, ServerRoute } from '@hapi/hapi';

import cars from './cars.fixture';
import { ICar } from './cars.types';

const route: ServerRoute = {
    method: 'GET',
    path: '/cars',
    options: {
        handler: function (request: Request, h: ResponseToolkit) {
            const query = request.query;

            const {
                sort_by,
                sort_order,
                page,
                page_size,
                ...filters
            } = query;

            let filteredCars = [...cars];   // use aa copy instead of the original

            Object.entries(filters).forEach(([token, val]) => {
                filteredCars = filteredCars.filter((car: ICar) => car[(token as keyof ICar)].toString().toLowerCase().startsWith(val.toLowerCase()));
            });

            return h.response(filteredCars);
        },
    }
};



export default route;