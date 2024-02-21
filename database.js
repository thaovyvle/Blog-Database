import { MongoClient } from 'mongodb'

let dbConnection

export const connectToDb = (cb) => {
  MongoClient.connect("mongodb://localhost:37017/lab9")
    .then((client) => {
      dbConnection = client.db();
      return cb;
    })
    .catch((err) => {
      console.log(err);
      return cb(err);
    });
};

export const getDb = () => dbConnection;