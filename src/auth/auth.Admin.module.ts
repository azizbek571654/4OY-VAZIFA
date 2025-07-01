import { Module } from "@nestjs/common";
import { AuthService } from "./auth.Admin.service";
import { AuthController } from "./auth.Admin.controller";
import { JwtModule } from "@nestjs/jwt";
import { UsersModule } from "../users/users.module";
import { MailModule } from "../mail/mail.module";
import { AdminModule } from "../admin/admin.module";

@Module({
  imports: [JwtModule.register({}),UsersModule, MailModule, AdminModule],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthAdminModule {}
