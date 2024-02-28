import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,

    },
    password:{
        type:String,
        required:true,
    },
    avatar:{
        type:String,
        default:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F5%2FProfile.png&f=1&nofb=1&ipt=24260d1ac60c2ac0ffd9999be8063fdabdca82cac307babde131155d9cd2cf93&ipo=images"
    },
},{timestamps: true});

const User = mongoose.model('User',userSchema);

export default User;