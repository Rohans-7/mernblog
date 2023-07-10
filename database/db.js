import mongoose from 'mongoose';

const Connection=async(URL)=>{
    try{
        await mongoose.connect(URL);
        console.log('Database Connected successfully');
    }catch(error){
        console.log('Error while connecting to db',error);

    }
}

export default Connection;