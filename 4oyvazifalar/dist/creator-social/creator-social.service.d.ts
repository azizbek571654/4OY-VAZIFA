import { CreateCreatorSocialDto } from './dto/create-creator-social.dto';
import { UpdateCreatorSocialDto } from './dto/update-creator-social.dto';
import { CreatorSocial } from './model/creator-social.model';
import { AdminService } from '../admin/admin.service';
import { SocialService } from '../social/social.service';
export declare class CreatorSocialService {
    private readonly creatorSocialModel;
    private readonly AdminServis;
    private readonly SocialServis;
    constructor(creatorSocialModel: typeof CreatorSocial, AdminServis: AdminService, SocialServis: SocialService);
    create(createCreatorSocialDto: CreateCreatorSocialDto): Promise<CreatorSocial | "CreatorSocial yaratilmadi">;
    findAll(): Promise<CreatorSocial[] | "CreatorSociallar topilmadi">;
    findOne(id: number): Promise<CreatorSocial | "CreatorSocial topilmadi" | null>;
    update(id: number, updateCreatorSocialDto: UpdateCreatorSocialDto): Promise<CreatorSocial | "CreatorSocial topilmadi">;
    remove(id: number): Promise<"CreatorSocial topilmadi" | {
        message: string;
    }>;
}
