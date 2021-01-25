// Using Node.js `require()`
const mongoose = require('mongoose');

async function connect() {
    //connect to MongoDB
    try {
        await mongoose.connect(
            'mongodb+srv://ptheson:Gbbd5aJZ7w1SOVtd@cluster1.yjkbn.mongodb.net/portfolio?retryWrites=true&w=majority',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false,
                useCreateIndex: true,
            },
        );
        console.log('Connect Successfuly!');
    } catch {
        console.log('Connect Error!!!');
    }
}

module.exports = { connect };
