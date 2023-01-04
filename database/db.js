const {default: mongoose} = require('mongoose');

async function connectDB(){
    await mongoose.connect('mongodb://localhost:27017/book_shop');
}

module.exports = connectDB;

/*const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'book_shop';

async function connect() {
    await client.connect();
    const db = await client.db(dbName);
    return db;
}

module.exports = connect;*/