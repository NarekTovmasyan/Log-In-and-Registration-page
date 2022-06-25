import mongoose from "mongoose";

const {Schema} = mongoose;

const contactSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        isPublic: {
            type: Boolean,
            default: false,
        },
        imageUrl: {
            type: String,
        },
        created: {
            type: Date,
            default: Date.now(),
        }
    }
);

const Contacts = mongoose.model('Contacts', contactSchema);

export {Contacts};