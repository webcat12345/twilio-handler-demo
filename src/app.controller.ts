import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { AppService } from './app.service';
import { SendSmsDto } from './send-sms.dto';

@Controller()
export class AppController {

  constructor(
    private readonly appService: AppService
  ) {}

  @ApiTags('Twilio')
  @Post('send-sms')
  sendSMS(@Body() body: SendSmsDto): Promise<any> {
    return this.appService.sendSMS(body.message, body.from, body.to);
  }

  @Post('twilio-sms-status')
  receiveSMSStatusCallback(@Body() body: any) {
    console.log(body);
    return true;
  }

  @Post('twilio-incoming-messages')
  receiveIncomingMessages(@Body() body: any) {
    console.log(body);
    return true;
  }
}
