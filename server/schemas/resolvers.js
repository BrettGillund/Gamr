const {User, Library} = require('../models')
const {mongoose} = require('mongoose')
const { findByIdAndDelete } = require('../models/Library')
const { signToken } = require('../auth');
const { ApolloError } = require('apollo-server-express');

const resolvers = {
    Query: {
        async getUsers() {
            return await User.find().populate('library')
            // this needs to be fixed 
        },
        async getOneUser(_, args) {
            return await (await User.findById(args.id))
        },
        async getGames() {
            return await Library.find()
        },
    },

    Mutation: {
        async addUser(_, { email, password, gamerTag, faveConsole }, context) {
            try {
                const user = await User.create({ email, password, gamerTag, faveConsole });
        
                const token = signToken(user);
                return { user, token };
        
              } catch (err) {
                throw new ApolloError(err);
              }
        },        
        async loginUser(_, { email, password }, context) {
            const user = await User.findOne({ email });

            if (!user) throw new ApolloError('There does not appear to be a user with the specified email address');

            if (!user.validatePass(password)) throw new ApolloError('Your password is incorrect');

            try {
                const token = signToken(user);

                return { user, token };
            } catch (err) {
              throw new ApolloError(err);
            }
        },
        async addGame(_, {game, user: userId}) {
          
            const newGame = new Library( {game} )
            const createdGame = await newGame.save();
            // var id = '631158f101382c2665f364d7'
            const user = await User.findById(userId);
            // this needs to be fixed 

         
            console.log(userId)
            console.log(createdGame)
            console.log(game)
            // console.log(newGame)


            user.library.push(createdGame._id);
            await user.save();
            return createdGame;
        },
        async deleteUser (_, { userId }) {
            return await User.findByIdAndDelete({_id: userId})
            console.log("user deleted")
        },
        async deleteGame (_, { gameId}) {
            return await Library(findByIdAndDelete({_id: gameId}))
            console.log("game deleted")
        }

    }
}

module.exports = resolvers;