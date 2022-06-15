import {Request, ResponseToolkit, ServerRoute } from '@hapi/hapi';

import cars from './cars.fixture';
import { ICar } from './cars.types';

const waitFor = (seconds: number) => new Promise((resolve) => {
    setTimeout(resolve, seconds);
});

const route: ServerRoute = {
    method: 'GET',
    path: '/cars',
    options: {
        handler: async function (request: Request, h: ResponseToolkit) {
            const query = request.query;

            const {
                sort_by,
                sort_order,
                page = 1,
                page_size = 10,
                ...filters
            } = query;

            const parsedPage = typeof page === 'string' ? parseInt(page) : page;
            const parsedPageSize = typeof page_size === 'string' ? parseInt(page_size) : page_size;
            const pageStart = (parsedPageSize * parsedPage) - parsedPageSize;
            const pageEnd = pageStart + parsedPageSize;

            let filteredCars = [...cars];   // use aa copy instead of the original

            Object.entries(filters).forEach(([token, val]) => {
                filteredCars = filteredCars.filter((car: ICar) => car[(token as keyof ICar)].toString().toLowerCase().startsWith(val.toLowerCase()));
            });

            const total = filteredCars.length;
            filteredCars = filteredCars.slice(pageStart, pageEnd);
            
            await waitFor(1000);

            return h.response({
                data: filteredCars,
                total,
            });
        },
    }
};



export default route;