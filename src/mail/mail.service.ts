import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { User } from '../users/model/user.model';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendMail(user: {
    email: string;
    name: string;
    activation_link: string;
  }) {
    const url = `${process.env.api_url}/api/users/activate/${user.activation_link}`;
    await this.mailerService.sendMail({
      to: user.email,
      subject: 'Xush kelibsiz!',
      template: './confirmation',
      context: {
        username: user.name,
        url,
      },
    });
  }

  // async sendMail(user: User) {
  //   const url = `${process.env.api_url}/api/users/activate/${user.activation_link}`;
  //   console.log(url);
  //   await this.mailerService.sendMail({
  //     to: user.email,
  //     subject: ` Welcome to inBook App! `,
  //     template: "./confirmation",
  //     context: {
  //       username: user.name,
  //       url,
  //     },
  //   });
  // }
}
