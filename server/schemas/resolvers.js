const {User, Profile} = require('../models')

const resolvers = {
    Query: {
        async getUsers() {
            return await User.find()
        }
    },

    Mutation: {
        async addUser(_, { email, password }, context) {
            return await User.create({
                email,
                password
            });
        },
        async addProfile(_, args) {
            return await Profile.create(args)
        }
    }
};

module.exports = resolvers;