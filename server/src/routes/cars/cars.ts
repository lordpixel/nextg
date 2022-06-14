import {Request, ResponseToolkit, ServerRoute } from '@hapi/hapi';

import cars from './cars.fixture';
import { ICar } from './cars.types';

const route: ServerRoute = {
    method: 'GET',
    path: '/cars',
    options: {
        handler: function (request: Request, h: ResponseToolkit) {
            const query = request.query || {};
            debugger;
            const {
                sort_by,
                sort_order,
                ...filters
            } = query;
            
            const page = query.page ? parseInt(query.page) : 1;
            const page_size = query.page_size ? parseInt(query.page_size) : 10;

            let filteredCars = [...cars];   // use a copy instead of the original

            Object.entries(filters).forEach(([token, val]) => {
                filteredCars = filteredCars.filter(
                    (car: ICar) => 
                        car[(token as keyof ICar)]
                            .toString()
                            .toLowerCase()
                            .startsWith(val.toLowerCase()
                        )
                    );
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



export default route;