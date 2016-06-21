import cfg from './config';
import express from 'express';
import http from 'http';
import {r, listen as wsListen} from 'rethinkdb-websocket-server';
import Promise from 'bluebird';

// Connect to rethinkdb
const dbOpts = {host: cfg.dbHost, port: cfg.dbPort, db: cfg.dbName};
const dbConnPromise = Promise.promisify(r.connect)(dbOpts);

const app = express();

const httpServer = http.createServer(app);

// Configure rethinkdb-websocket-server to listen on the /db path
wsListen({
  httpServer,
  httpPath: '/db',
  dbHost: cfg.dbHost,
  dbPort: cfg.dbPort,
  unsafelyAllowAnyQuery: true,
});

// Start the HTTP server on the configured port
httpServer.listen(cfg.webPort);
console.log('Server started');
