import { Model } from 'sequelize-typescript';
import { CreatorSocial } from '../../creator-social/model/creator-social.model';
export declare class Social extends Model<Social, {
    title: string;
    description: string;
}> {
    title: string;
    description: string;
    creatorSocial: CreatorSocial;
}
