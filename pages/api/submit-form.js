// pages/api/submit-form.js
import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://Hassan:Hassan123@cluster0.f58a3ip.mongodb.net/?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
const db = mongoose.connection;

const FormDataModel = mongoose.model("FormData", {
  name: String,
  email: String,
  message: String,
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const formData = new FormDataModel(req.body);
      await formData.save();
      res.status(201).json({ message: "Form data submitted successfully!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
