const {Schema, mongoose, model} = require('mongoose');


// this is a rough draft....

// this needs to be tweaked 

const profileSchema = new Schema ({

    gamerTag: {
        type: String,
    },
    faveConsole: {
        type: String,
    },
    faveGame: {
        type: String,
    },
    User:[{

        type: mongoose.Types.ObjectId,
        ref: 'User' 
    }]





})

const Profile = model('Profile', profileSchema);
module.exports = Profile