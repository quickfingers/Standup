var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var standupSchema = new Schema({
    memberName: String,
    workYesterday: String,
    workToday: String,
    impediment: String,
    createdOn: {type: Date, default: Date.now}
});


// Expose (export) the model now..
module.exports= mongoose.model("Standup", standupSchema);


/*
// disabled _id
var noIdScehma = new Schema({name:String}, {_id:false});

// Example of using Schema add
var includeMiddleName = true;

var exampleSchema = new Schema;

if(includeMiddleName) {
    exampleSchema.add({
        memberName: {
            first:String,
            middle:String,
            last:String
        }
    });
}else {
    exampleSchema.add({
        memberName:{
            first:String,
            last:String
        }
    });
}

exampleSchema.add({
    memberName: String,
    project: String,
    workYesterday: String,
    workToday: String,
    impediment: String,
    createdOn: {type: Date, default: Date.now}
});

    */