import { Module } from '@nestjs/common';
import { OtpModule } from './mail/otp/otp.module';

@Module({
  imports: [OtpModule]
})
export class Module {}
