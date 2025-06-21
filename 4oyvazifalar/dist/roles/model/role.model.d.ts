import { Model } from 'sequelize-typescript';
import { Admin } from '../../admin/model/admin.model';
export declare class Roles extends Model<Roles, {
    value: string;
    destcription: string;
}> {
    value: string;
    destcription: string;
    users: Admin[];
}
