import { Injectable } from '@nestjs/common';
import * as twilio from 'twilio';

const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const callbackURL = 'http://localhost:3000/twilio-sms-status';

@Injectable()
export class AppService {

  twilioHandler;

  constructor() {
    this.twilioHandler = twilio(accountSid, authToken);
  }

  getHello(): string {
    return 'Hello World!';
  }

  sendSMS(message: string, from: string, to: string): Promise<any> {
    return this.twilioHandler.messages.create({ body: message, from, to, statusCallback: callbackURL }).then(message => {
      // message.sid: identifier of message we sent just before
      console.log(message.sid);
    });
  }

}
