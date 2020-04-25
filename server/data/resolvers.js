import mongoose from 'mongoose';
import {Books} from './db';

const resolvers = {
    Query: {
        getBook: (root, {id}) => {
            // VERY IMPORTANT: cada vez que se hace una seleccion en base a un id o input, hay que meter new Promise
            return new Promise((resolve, rejects) => { 
                Books.findById({_id: id}, (error, cliente) => {
                    if(error) rejects(error)
                    else resolve(cliente)
                })
            })
        },
        getBooks: (root, {limite}) => { // no hace falta new Promise, ya que coge todos los clientes
            return Books.find({}).limit(limite) // con questo parametro {} trae todo // limit è un metodo di mongoose
        },
        hello: () => "Hello"
    },
    Mutation: {
        updateBook: (root, {input}) => {
            return new Promise((resolve, rejects) => {
                console.log(input.id);
                Books.findOneAndUpdate({_id: input.id}, input, {new: true, useFindAndModify: false}, (error, cliente) => {
                    if(error) rejects(error)
                    else resolve(cliente)
                });
            })
            }   
        }
    }


module.exports = resolvers;