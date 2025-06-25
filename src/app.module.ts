import { Module, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
import { KurierModule } from './kurier/kurier.module';
import { SocialModule } from './social/social.module';
import { ConfigModule } from '@nestjs/config';
import { CategoriesModule } from './categories/categories.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Admin } from './admin/model/admin.model';
import { Kurier } from './kurier/model/kurier.model';
import { Social } from './social/model/social.model';
import { Category } from './categories/model/category.model';
import { DonationsModule } from './donations/donations.module';
import { NotificationsModule } from './notifications/notifications.module';
import { CreatorSocialModule } from './creator-social/creator-social.module';
import { Notification } from './notifications/model/notification.model';
import { CreatorSocial } from './creator-social/model/creator-social.model';
import { Donation } from './donations/model/donation.model';
import { RolesModule } from './roles/roles.module';
import { Roles } from './roles/model/role.model';
import { UserRole } from './admin/model/user-role.model';
import { ProductModule } from './product/product.module';
import { ProductImegsModule } from './product-imegs/product-imegs.module';
import { Product } from './product/model/product.model';
import { ProductImeg } from './product-imegs/model/product-imeg.model';
import { PaymentModule } from './payment/payment.module';
import { WithdrawsModule } from './withdraws/withdraws.module';
import { ProductOrdersModule } from './product-orders/product-orders.module';
import { SavedItemsModule } from './saved-items/saved-items.module';
import { ProductReweiwsModule } from './product-reweiws/product-reweiws.module';
import { Payment } from './payment/model/payment.model';
import { AuthModule } from './auth/auth.module';
import { ProductOrder } from './product-orders/model/product-order.model';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.PG_HOST,
      port: Number(process.env.PG_PORT),
      username: process.env.PG_USER,
      password: process.env.PG_PASS,
      database: process.env.PG_DB,
      autoLoadModels: true,
      synchronize: true,
      logging: false,
      models: [
        Admin,
        Kurier,
        Social,
        Category,
        Notification,
        CreatorSocial,
        Donation,
        Roles,
        UserRole,
        Product,
        ProductImeg,
        Payment,
        ProductOrder,
      ],
    }),
    AdminModule,
    KurierModule,
    CategoriesModule,
    SocialModule,
    DonationsModule,
    NotificationsModule,
    CreatorSocialModule,
    RolesModule,
    ProductModule,
    ProductImegsModule,
    PaymentModule,
    WithdrawsModule,
    ProductOrdersModule,
    SavedItemsModule,
    ProductReweiwsModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
    AppService,
  ],
})
export class AppModule {}
