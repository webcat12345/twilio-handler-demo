import { ApiProperty } from '@nestjs/swagger';

export class SendSmsDto {

  @ApiProperty()
  message: string;

  @ApiProperty()
  from: string;

  @ApiProperty()
  to: string;
}
