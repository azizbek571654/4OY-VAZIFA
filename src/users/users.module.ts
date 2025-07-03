import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "./models/user.model";
import { JwtModule } from "@nestjs/jwt";
import { BotModule } from "../bot/bot.module";
import { OtpModule } from "../mail/otp/otp.module";
import { Otp } from "./models/otp.model";

@Module({
  imports: [SequelizeModule.forFeature([User, Otp]),  JwtModule, BotModule, OtpModule],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}             
