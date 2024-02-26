const mongoose = require('mongoose');

const connectDB = (url) => {
    return mongoose.connect(url, 
        {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    }
    )
    
}

module.exports = connectDB;

// .then(()=> {
//     console.log("Connected to the db...");
// }).catch((err) => console.log(err))
