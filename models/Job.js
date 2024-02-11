const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var jobsSchema = new mongoose.Schema({
    company:{
        type:String,
        required:[true, 'Please provide company name'],
    },
    position:{
        type:String,
        required:[true, 'Please provide position'],
    },
    status:{
        type:String,
        enum:['interview', 'declined', 'pending'],
        default:'pending',
    },
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:'User',
        required:[true, 'Please provide user']
    }
},{timestamps:true});

//Export the model
module.exports = mongoose.model('Job', jobsSchema);