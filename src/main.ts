import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { UserService } from './users/users.service';
import { LanguageService } from './language/language.service';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);

    const PORT = process.env.PORT || 3000;

    try {
      const languageService = app.get(LanguageService);
      await languageService.createdefaultLanguage({ name: 'Uzbek' });
      const userService = app.get(UserService);
      await userService.createSuperAdmin();
    } catch (error) {
      console.warn('❗ Super admin yaratilmadi:', error.message);
    }

    const config = new DocumentBuilder()
      .setTitle('Project')
      .setDescription('Nestjs RESTFULL API')
      .setVersion('1.0')
      .addBearerAuth(
        {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
          name: 'Authorization',
          description: 'Iltimos JWT token kiriting',
          in: 'header',
        },
        'token',
      )
      .addTag('Nestjs, Valudators, User roles, Autharization')
      .build();
    app.setGlobalPrefix('api');
    const documentFactory = () => SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, documentFactory);

    // app.use(cookieParser());
    await app.listen(PORT, () => {
      console.log(
        ' + ====================================================================== +',
      );
      console.log(
        `| |                                                                      | |`,
      );
      console.log(
        `| | 🚀  Server started at:            http://localhost:${PORT} 🚀           | |`,
      );
      console.log(
        `| | 📚  Swagger API documentation at: http://localhost:${PORT}/api 📚       | |`,
      );
      console.log(
        `| |                                                                      | |`,
      );
      console.log(
        ' + ====================================================================== +',
      );
    });
  } catch (error) {}
}
bootstrap();
