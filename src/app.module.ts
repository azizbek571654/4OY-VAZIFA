import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { UsersModule } from "./users/users.module";
import { User } from "./users/models/user.model";
import { AuthModule } from './auth/auth.module';
import { AuthAdminModule } from './auth/auth.Admin.module';
import { MailModule } from './mail/mail.module';
import { GenreModule } from './genre/genre.module';
import { LanguagesModule } from './languages/languages.module';
import { AuthorsModule } from './authors/authors.module';
import { Language } from "./languages/model/language.model";
import { Author } from "./authors/model/author.model";
import { CategoriesModule } from './categories/categories.module';
import { Category } from "./categories/model/category.model";
import { AdminModule } from './admin/admin.module';
import { TelegrafModule } from "nestjs-telegraf";
import { BOT_NAME } from "./app.constans";
import { BotModule } from './bot/bot.module';
import { AudioBookModule } from './audio-book/audio-book.module';
import { AudioBook } from "./audio-book/model/audio-book.model";
import { AudioPartsModule } from './audio-parts/audio-parts.module';
import { AudioPart } from "./audio-parts/model/audio-part.model";
import { BookVersionModule } from './book-version/book-version.module';
import { BookVersion } from "./book-version/model/book-version.model";
import { BooksModule } from './books/books.module';
import { Book } from "./books/model/book.model";
import { Bot } from "./bot/models/bot.model";


@Module({
  imports: [
    TelegrafModule.forRootAsync({
      botName: BOT_NAME,
      useFactory: () => ({
        token: process.env.BOT_TOKEN!,
        middleware: [],
        include: [BotModule],
      }),
    }),
    ConfigModule.forRoot({
      envFilePath: ".env",
      isGlobal: true,
    }),

    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.PG_HOST,
      port: Number(process.env.PG_PORT),
      username: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DB,
      models: [
        User,
        Language,
        Author,
        Category,
        AudioBook,
        AudioPart,
        BookVersion,
        Book,
        // Bot,
      ],
      autoLoadModels: true,
      logging: false,
      sync: { alter: true },
    }),
    UsersModule,
    AuthModule,
    AuthAdminModule,
    MailModule,
    GenreModule,
    LanguagesModule,
    AuthorsModule,
    CategoriesModule,
    AdminModule,
    BotModule,
    AudioBookModule,
    AudioPartsModule,
    BookVersionModule,
    BooksModule,
    BotModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
