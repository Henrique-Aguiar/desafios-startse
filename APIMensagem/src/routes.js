import { Router } from "express";
import * as MenssageController from "./controllers/message.js";

const routes = Router()

routes.get('/', (request, response) => {
    response.send("API Tech Academy -Integração com o Twilio")
})

routes.post('/message', MenssageController.message)

export default routes