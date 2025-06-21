import { Model } from 'sequelize-typescript';
import { Admin } from '../../admin/model/admin.model';
export declare class Notification extends Model<Notification, {
    user_id: number;
    message: string;
}> {
    user_id: number;
    admin: Admin;
    message: string;
}
