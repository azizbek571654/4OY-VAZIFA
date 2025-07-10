import { Module } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { NotificationController } from './notification.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Notification } from './model/notification.model';
import { UsersModule } from '../users/users.module';
import { User } from '../users/model/user.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([Notification, User]), UsersModule, JwtModule],
  controllers: [NotificationController],
  providers: [NotificationService],
  exports: [NotificationService],
})
export class NotificationModule {}
