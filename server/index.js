import cfg from './config';
import express from 'express';
import http from 'http';
import bodyParser from 'body-parser'
import morgan from 'morgan';
import mongoose from 'mongoose';
import router from './router';

// Connect to mongodb
mongoose.connect('mongodb://localhost:beerify/beerify');

const app = express();

const httpServer = http.createServer(app);

// middleware
app.use(morgan('combined')); // logging framework
app.use(bodyParser.json({ type: '*/*' }));

// hook up our router
router(app);

// Server Setup -- communicate with world. //
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log("Server listening on localhost:"+port);
