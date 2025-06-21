import { Model } from 'sequelize-typescript';
import { CreatorSocial } from '../../creator-social/model/creator-social.model';
import { Donation } from '../../donations/model/donation.model';
import { Notification } from '../../notifications/model/notification.model';
import { Roles } from '../../roles/model/role.model';
import { Product } from '../../product/model/product.model';
export declare class Admin extends Model<Admin, {
    username: string;
    email: string;
    password: string;
    role: string;
}> {
    username: string;
    email: string;
    password: string;
    role: string;
    creatorSocial: CreatorSocial;
    donation: Donation;
    notification: Notification;
    Roles: Roles[];
    product: Product;
}
