import { Model } from 'sequelize-typescript';
import { Admin } from '../../admin/model/admin.model';
export declare class Donation extends Model<Donation, {
    supporter_id: number;
    creator_id: number;
    amount: string;
    message: string;
    payment_method: string;
}> {
    supporter_id: number;
    admin: Admin;
    creator_id: number;
    admin2: Admin;
    amount: string;
    message: string;
    payment_method: string;
}
