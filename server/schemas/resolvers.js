const { mongoose } = require('mongoose');
const {User, Profile} = require('../models');


const resolvers = {
    Query: {
        async getUsers() {
            return await User.find()
        },
        async getProfile() {
            return await Profile.find()
        }
    },

    Mutation: {
        async addUser(_, { email, password}) {
            const newUser = new User({ email, password})
            const createdUser = await newUser.save();

            return createdUser
        },
        async addProfile(_, { gamerTag, faveConsole, faveGame, user: userId}) {
            const newProfile = new Profile({ gamerTag, faveConsole, faveGame, user: userId})
            const createdProfile = await newProfile.save();
            const user = await User.findById(mongoose.Types.ObjectId(userId));
            user.profile.push(createdProfile._id);
            await user.save();

            return createdProfile;
        }
        },
    }


module.exports = resolvers;