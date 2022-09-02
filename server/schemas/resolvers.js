const {User, Library} = require('../models')
const { SchemaTypes } = require('mongoose')
const resolvers = {
    Query: {
        async getUsers() {
            return await User.find()
        },
        async getGames() {
            return await Library.find()
        },
    },

    Mutation: {
        async addUser(_, { email, password, gamerTag, faveConsole }, context) {
            return await User.create({
                email,
                password,
                gamerTag,
                faveConsole,
            });
        },
        async addGame(_, { game, user: userId }) {
            const newGame = new Library({ game, user: userId})
            const createdGame = await newGame.save();
            const user = await User.findById(SchemaTypes.ObjectId(userId));
            user.library.push(createdGame._id);
            await user.save();
            return createdGame;
        }

    }
}

module.exports = resolvers;