const { ObjectID } = require('mongodb');
const Book = require('../models/Books');
//const connect = require('./../database/db');


exports.index = async (req, res) => {
    //const db = await connect();
    //const books = await db.collection('books').find().toArray();
    const books = await Book.find();
    res.json(books);
};

exports.store = async (req, res) => {
    const db = await connect();
    await db.collection('books').insertOne(req.body);
    res
    .status(201)
    .json({ data: 'Book is stored' });
};

exports.show = async (req, res) => {
    const _id = ObjectID(req.params.id);
    /*const db = await connect();

    const book = await db
        .collection('books')
        .find({ _id: (_id) })
        .toArray();*/
    
    const book = await Book.find({_id});

    res.json(book);
};

exports.update = async (req, res) => {
    const _id = ObjectID(req.params.id);
    /*const db = await connect();

    const book = await db
        .collection('books')
        .updateOne({_id}, {$set: req.body});*/

    await Book.updateOne({_id}, {$set: req.body});
    res.json({data: 'Book is updated successfully'})
};

exports.delete = async (req, res) => {
    const _id = ObjectID(req.params.id);
    /*const db = await connect();

    const book = await db
        .collection('books')
        .deleteOne({_id});*/
    await Book.deleteOne({_id});
    res
    .status(204)
    .json({data: 'Book is deleted'})
};