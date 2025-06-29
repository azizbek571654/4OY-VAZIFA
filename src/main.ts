import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function strap() {
  try {
    const PORT = process.env.PORT ?? 3030
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe());

    const config = new DocumentBuilder()
    .setTitle("InBookk")
    .setDescription("NestJs RestFull api")
    .setVersion("1.0")
    .addTag("NestJs, Swagger, Validation Cookie RefreshToken SendMain")
    .addBearerAuth()
    .build();
    
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/docs', app, document);

  await app.listen(PORT, ()=> {
    console.log(`Server started at: http://localhost:${PORT}`)
  });
  } catch (error) {
    console.log(error)
  }
}
strap();