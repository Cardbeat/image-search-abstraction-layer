import express from 'express';
import mongoose from 'mongoose';

const mongodb = process.env.MONGODB_URI || 'mongodb://localhost:27017';
mongooseInit(mongodb);


export const app = express();


function mongooseInit(mongodb) {
  mongoose.Promise = global.Promise;
  mongoose.connect(mongodb);
}
