import { Notification } from '../model/notification.model';
export declare class CreateNotificationDto implements Partial<Notification> {
    user_id: number;
    message: string;
}
