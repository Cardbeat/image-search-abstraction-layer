import express from 'express';
import mongoose from 'mongoose';
import { searchApi } from './api/search';

const mongodb = process.env.MONGODB_URI ||'mongodb://image:image@ds111882.mlab.com:11882/image';
mongooseInit(mongodb);


export const app = express();



app.use('/api', searchApi);

// mongoose init func
function mongooseInit(mongodb) {
  mongoose.Promise = global.Promise;
  mongoose.connect(mongodb);
}
