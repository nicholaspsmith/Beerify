import express from 'express';
import http from 'http';
import bodyParser from 'body-parser'
import morgan from 'morgan';
import router from './router';
import mongoose from 'mongoose';
import cors from 'cors';

// Connect to mongodb
mongoose.connect('mongodb://localhost:beerify/beerify');

const app = express();

// middleware
app.use(morgan('combined')); // logging framework
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));

// hook up our router
router(app);

// Server Setup -- communicate with world. //
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log("Server listening on localhost:" + port);
