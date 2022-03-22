const mongoose = require('mongoose'); 
const validator = require('validator');
const bcrypt = require('bcryptjs'); 
const jwt = require('jsonwebtoken');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    }, 
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('email is invalid');
            }
        }
    },
    password: {
        type: String,
        required: true,
        minLength: 7,
        trim: true,
        validate(value) {
            if (value.toLowerCase.includes('password')) {
                throw new Error('pw need be better');
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('age must be positive number'); 
            }
        }
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
})

userSchema.methods.generateAuthToken = async function() {
    const user = this;
    const token = jwt.sign({_id: user._id.toString()}, 'thisisthetokensecretmessage');

    user.tokens = user.tokens.concat({token});
    await user.save(); 
    return token; 
}

userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({email})
    if (!user) {
        throw new Error('unable to login');
    }
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
        throw new Error('unable to login'); 
    }
    return user; 
}
// hash plain text pw before saving
// setting up middleware 
userSchema.pre('save', async function (next) {
    const user = this; 
    if (user.isMOdified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }
    console.log('just before saving');


    next()
});

const User = mongoose.model('User', userSchema);
module.exports = User; 