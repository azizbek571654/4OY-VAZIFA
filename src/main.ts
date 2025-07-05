import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function start() {
  const PORT = process.env.PORT ?? 3003;
  const app = await NestFactory.create(AppModule);
 await app.listen(PORT, () => {
   console.log(" + ====================================================================== +");
   console.log(`| |                                                                      | |`);
   console.log(`| | 🚀  Server started at:            http://localhost:${PORT}           🚀 | |`);
   console.log(`| | 📚  Swagger API documentation at: http://localhost:${PORT}/api/docs  📚 | |`);
   console.log(`| |                                                                      | |`);
   console.log(" + ====================================================================== +");
 });
}
start();