'use strict';

import Hapi from "@hapi/hapi";
import { Server } from "@hapi/hapi";

import { routes } from "./routes";

export let server: Server;

export const init = async function(): Promise<Server> {

    // create server
    server = Hapi.server({
        port: process.env.PORT || 8080,
        host: '0.0.0.0',
        routes: {
            cors: true
        }
    });

    // plug routes in
    server.route(routes);

    return server;
};

export const start = async function (): Promise<void> {
    console.log(`Listening on ${server.settings.host}:${server.settings.port}`);
    return server.start();
};

process.on('unhandledRejection', (err) => {
    console.error("unhandledRejection");
    console.error(err);
    process.exit(1);
});