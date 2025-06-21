import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { Notification } from './model/notification.model';
export declare class NotificationsService {
    private readonly notificationModel;
    constructor(notificationModel: typeof Notification);
    create(createNotificationDto: CreateNotificationDto): Promise<Notification | "Notification yaratilmadi">;
    findAll(): Promise<Notification[] | "Notificationlar topilmadi">;
    findOne(id: number): Promise<Notification | "Notification topilmadi" | null>;
    update(id: number, updateNotificationDto: UpdateNotificationDto): Promise<Notification | "Notification topilmadi">;
    remove(id: number): Promise<"Notification topilmadi" | {
        message: string;
    }>;
}
