const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://sukritgoyal36:vzhz5IzTNNk0dfWR@cluster0.7ggapds.mongodb.net/Yumfood?retryWrites=true&w=majority';
const mongoDB = async() =>{
    await mongoose.connect(mongoURI);
    console.log("Connection sucessfull");
    const fetched_data = await mongoose.connection.db.collection("foodItems");
    let dataarr = await fetched_data.find({}).toArray();
    // console.log(dataarr);
}

module.exports = mongoDB;
// const mongoose = require('mongoose')

// const connectDB = async () => {
//     try {
//         // mongoose.set('strictQuery', false)
//         mongoose.connect(mongoURI) 
//         console.log('Mongo connected')

        
//         // fetched_data.find({}).toArray( function(err,data){
//         //     if(err){
//         //         console.log(err);
//         //     }else{
//         //         console.log(data);
//         //     } 
//         // })

//     } catch(error) {
//         console.log(error)
//         process.exit()
//     }
// }


// module.exports = connectDB;