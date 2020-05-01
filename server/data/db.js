import mongoose from "mongoose";
import {booksCollection} from './booksCollection.js';

mongoose.connect('mongodb://localhost/database-books', {useNewUrlParser: true, useUnifiedTopology: true});

const booksSchema = new mongoose.Schema({
    title: String,
    author: String,
    score: Number,
    count: Number,
    pages: Number,
    price: String,
    image: String,
    description: String,
    isFavourite: Boolean,
    type:String
});

// The next step is compiling our schema into a Model (a  model is a class with which we construct documents):
const Books = mongoose.model('books', booksSchema);

// para evitar que , cada vez que se lanze el server, se añaden los datos a los existentes ya.
// lo existentes se borran y se ponen los nuevos
Books.deleteMany({}, () => console.log('Documentos removidos'))

Books.create(booksCollection, function (err) {
    console.log('Documentos actualizados')
    if (err) {
        console.log('Hubo un error')
    } 
  });

export {Books};
