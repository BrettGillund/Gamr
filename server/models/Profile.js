const {Schema, model} = require('mongoose');


// this is a rough draft....

// this needs to be tweaked 

const profileSchema = new Schema ({
    game: {
        type: String,
        required: true
    },
    console: {
        type: String,
        required:true
    },
    gamerTag: {
        type: String,
        required: true
    }

})

const Profile = model('Profile', profileSchema);
module.exports = Profile