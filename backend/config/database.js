const mongoose = require('mongoose');

const getDatabase = ()=>{
    mongoose.connect(process.env.MONGO_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(con=>{
        console.log(`Mongodb connected: ${con.connection.host}`);
    })
      .catch(err => console.error("❌ MongoDB error:", err.message));

}

module.exports = getDatabase;