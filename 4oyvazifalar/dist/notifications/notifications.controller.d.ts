import { NotificationsService } from './notifications.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
export declare class NotificationsController {
    private readonly notificationsService;
    constructor(notificationsService: NotificationsService);
    create(createNotificationDto: CreateNotificationDto): Promise<import("./model/notification.model").Notification | "Notification yaratilmadi">;
    findAll(): Promise<import("./model/notification.model").Notification[] | "Notificationlar topilmadi">;
    findOne(id: string): Promise<import("./model/notification.model").Notification | "Notification topilmadi" | null>;
    update(id: string, updateNotificationDto: UpdateNotificationDto): Promise<import("./model/notification.model").Notification | "Notification topilmadi">;
    remove(id: string): Promise<"Notification topilmadi" | {
        message: string;
    }>;
}
