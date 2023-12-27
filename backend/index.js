import mongoose from "mongoose";
import pkg from "express";
const { express } = pkg;
import { PORT, MONGO_URL } from "./config.js";
import cors from "cors"
import { contact } from "./models/contactModel.js";
// import contactRoute from './routes/contactRoute.js';
const app = pkg();

app.use(pkg.json());

app.use(cors(
  {
    origin: {"https://phone-mania-nzm9.vercel.app/"},
    methods : {"POST","GET"},
    credentials : true
  }
));
app.get('/', (request, response) => {
  console.log(request);
  return response.status(234).send('Welcome To MERN Stack Tutorial');
});

// app.use('/contact',contactRoute);

app.post("/", async(request,response) => {
    try{
        if (
            !request.body.name ||
            !request.body.email ||
            !request.body.description
          ) {
            response.status(200).send({ message: "Please provide the full info" });
          }
          const newContact ={

            name: request.body.name,
            email: request.body.email,
            description: request.body.description,
          };

          const Contact = await contact.create(newContact);
          return response.status(203).send(Contact);
        } catch (error) {
          console.log(error);
          response.status(200).send({ message: error.message });
        }
})

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("App is connected to the database");
    app.listen(PORT, () => {
      console.log(`App is listening to port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
