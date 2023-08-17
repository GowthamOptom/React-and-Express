const { string } = require("joi");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CSchema = new Schema ( {
    _id: {
        type:String,
        required:[true, 'id field required']
    },
    hostname: {
        type:String,
        required:[true, 'hostname required']
    },
    startTime: {
        type:String,
        required:[true, 'startTime required']
    },
    pid: {
        type:Number,
        required:[true, 'pid required']
    }
});

const Census = mongoose.model('census', CSchema, "census");

module.exports = Census;