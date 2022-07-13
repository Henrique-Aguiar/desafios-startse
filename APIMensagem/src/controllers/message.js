import * as MenssageService from '../services/message.js'

async function message(request, response) {
    const message = request.body.message
    const phoneNumber = request.body.phoneNumber
    try {
        const responseMessage =  await MenssageService.sendMessage(message, phoneNumber)
        response.send(responseMessage)
    } catch(error){
        response.status(error.status).send(error)
    }
}

export {message}