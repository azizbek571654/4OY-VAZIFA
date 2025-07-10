import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Notification } from './model/notification.model';
import { UserService } from '../users/users.service';
import { NotificationType } from '../common/enum';

@Injectable()
export class NotificationService {
  constructor(
    @InjectModel(Notification)
    private readonly notificationModel: typeof Notification,
    private readonly userService: UserService,
    private readonly sellerService: UserService,
  ) {}
  async create(createNotificationDto: CreateNotificationDto) {
    const user = await this.userService.findOneuser(
      createNotificationDto.user_id,
    );
    if (!user) {
      throw new NotFoundException('user id topilmadi');
    }
    // if (user.role !== 'customer') {
    //   throw new BadRequestException('user role customer emas');
    // }
    const seller = await this.userService.findOneuser(
      createNotificationDto.owner_id,
    );
    if (!seller) {
      throw new NotFoundException('owner id topilmadi');
    }
    if (seller.role !== 'seller') {
      throw new BadRequestException('owner role seller emas');
    }

    const notification = await this.notificationModel.create(
      createNotificationDto,
    );

    if (createNotificationDto.type === NotificationType.WARNING) {
      const warningCount = await this.notificationModel.count({
        where: {
          user_id: createNotificationDto.user_id,
          type: NotificationType.WARNING,
        },
      });

      if (warningCount >= 3) {
        await this.userService.update(createNotificationDto.user_id, {
          is_banned: true,
        });
        setTimeout(async () => {
          await this.userService.update(createNotificationDto.user_id, {
            is_banned: false,
            banned_until: undefined,
          });
          console.log(
            `🟢 User ${createNotificationDto.user_id} test uchun unbanned qilindi`,
          );
        }, 20000);
        // }, 2147483647);
      }
    }

    return notification;
  }

  findAll() {
    return this.notificationModel.findAll({ include: { all: true } });
  }

  async findOneNotification(id: number): Promise<Notification> {
    const notification = await this.notificationModel.findByPk(id);

    if (!notification) {
      throw new NotFoundException('Notification not found');
    }

    if (!notification.is_read) {
      await notification.update({ is_read: true });
    }

    return notification;
  }

  async update(id: number, updateNotificationDto: UpdateNotificationDto) {
    const Notification = await this.notificationModel.update(
      updateNotificationDto,
      {
        where: { id },
        returning: true,
      },
    );
    return Notification[1][0];
  }

  async remove(id: number) {
    const result = await this.notificationModel.destroy({ where: { id } });
    if (result > 0) {
      return `${id} - Notification o'chirildi`;
    }

    return `${id}- Notification  yo'q`;
  }
}
