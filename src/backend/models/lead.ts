import { Schema, model } from "mongoose";

const leadSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

/**
 * Hello
 * @property {string} email.required - Email of the lead
 */
const Lead = model("leads", leadSchema);

export default Lead;
