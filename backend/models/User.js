const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String, // ✅ Fixed
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      match: [/.+\@.+\..+/, "Please enter a valid email address"],
    },
    password: {
      type: String, // ✅ Fixed
      required: true,
      minLength: 6,
    },
    role: {
      type: String, // ✅ Fixed
      enum: ["customer", "admin"],
      default: "customer",
    },
  },
  { timestamps: true }
);

// password hash middleware

userSchema.pre("save",async function(next){
    if(!this.isModified("password")) return next()

        try{
        const salt = await bcrypt.genSalt(10)
        this.password = await bcrypt.hash(this.password,salt)
        next()
        }catch(err){
            next(err)
        }
})

// math user entered password to hashed password

userSchema.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password)
}


module.exports = mongoose.model("User",userSchema)