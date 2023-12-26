import pkg from "express";
const { express } = pkg;
import { contact } from "../models/contactModel";


const router = pkg.Router();

router.post("/", async(request,response) => {
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

export default router