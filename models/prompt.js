import {Schema, model, models} from "mongoose";

const PromptSchema = new Schema ({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    prompt: {
        type: String,
        required: [true, 'Please enter a prompt'],
        unique: [true, 'Prompt already exists'],
    },
    tag: {
        type: String,
        required: [true, 'Please enter a tag'],
    }
})

const Prompt = models.Prompt || model('Prompt', PromptSchema)

export default Prompt