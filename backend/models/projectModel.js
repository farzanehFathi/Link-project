const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema(
  {
    title: { type: String, required: true },
    location: { type: String, required: true },
    client: { type: String, required: true },
    status: { type: String, required: true },
    grossArea: { type: String, required: true },
    services: { type: String, required: true },
    sectors: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema);
