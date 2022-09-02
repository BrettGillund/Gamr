const {User, Library} = require('../models')
const {mongoose} = require('mongoose')

const resolvers = {
    Query: {
        async getUsers() {
            return await User.find()
            // this needs to be fixed 
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
            var id = '631158f101382c2665f364d7'
            const user = await User.findById(id);
            // this needs to be fixed 


            console.log(user)
            // console.log(createdGame)
            console.log(newGame)


            user.library.push(createdGame._id);
            await user.save();
            return createdGame;
            c
        }

    }
}

module.exports = resolvers;