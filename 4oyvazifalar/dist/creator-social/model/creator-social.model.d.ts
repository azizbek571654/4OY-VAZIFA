import { Model } from 'sequelize-typescript';
import { Admin } from '../../admin/model/admin.model';
import { Social } from '../../social/model/social.model';
export declare class CreatorSocial extends Model<CreatorSocial, {
    creator_id: number;
    social_id: number;
    url: string;
}> {
    creator_id: number;
    admin: Admin;
    social_id: number;
    social: Social;
    url: string;
}
