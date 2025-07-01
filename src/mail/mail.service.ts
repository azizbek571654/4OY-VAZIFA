import { MailerService } from "@nestjs-modules/mailer";
import { Injectable } from "@nestjs/common";
import { User } from "../users/models/user.model";
import { Admin } from "../admin/model/admin.model";

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendMail(user: User) {
    const url = `${process.env.api_url}/api/users/activate/${user.activation_link}`;
    console.log(url);

    await this.mailerService.sendMail({
      to: user.email,
      subject: "Welcome to InBook App!",
      template: "./confirmation",
      context: {
        username: user.full_name,
        url,
      },
    });
  }
  async sendMailA(admin: Admin) {
    const url = `${process.env.api_url}/api/admin/activate/${admin.activation_link}`;
    console.log(url);
    console.log("Admin.email:", admin.email);


    await this.mailerService.sendMail({
      to: admin.email,
      subject: "Welcome to InBook App!",
      template: "./confirmation",
      context: {
        username: admin.fullname,
        url,
      },
    });
  }
}
