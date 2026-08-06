const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        console.log("MongoDB Connected");
    } catch (error) {
        console.error("Database Connection Error:", error.message);
        process.exit(1);
    }
};

module.exports = connectDB;

/* const mongoose= require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/student-login")
.then(()=>{
    console.log("mongodb connection successful");
})

.catch((err)=>{
    console.log(err);
}) */