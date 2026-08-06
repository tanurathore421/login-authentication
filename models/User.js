const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
{
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    }
},
{
    timestamps: true
});

module.exports = mongoose.model("User", userSchema);


/* const mongoose=require("mongoose");
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/student-login");
    console.log("Connected to MongoDB");}

const loginSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String
});

const Login=mongoose.model("Login",loginSchema);

async function Auth() {
    const result=await Login.findOneAndUpdate(
        {name:"sajal"},
        {
            email:"sajal@234",
            password:"AB123"
        },
        {
            upsert:true,
            returnDocument:"after"
        }
    );
    console.log(result);
    console.log("login successful");
    mongoose.connection.close();
}

main()
    .then(() => Auth())
    .catch(err => console.log(err)); */