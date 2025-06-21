import { CreatorSocialService } from './creator-social.service';
import { CreateCreatorSocialDto } from './dto/create-creator-social.dto';
import { UpdateCreatorSocialDto } from './dto/update-creator-social.dto';
export declare class CreatorSocialController {
    private readonly creatorSocialService;
    constructor(creatorSocialService: CreatorSocialService);
    create(createCreatorSocialDto: CreateCreatorSocialDto): Promise<import("./model/creator-social.model").CreatorSocial | "CreatorSocial yaratilmadi">;
    findAll(): Promise<import("./model/creator-social.model").CreatorSocial[] | "CreatorSociallar topilmadi">;
    findOne(id: string): Promise<import("./model/creator-social.model").CreatorSocial | "CreatorSocial topilmadi" | null>;
    update(id: string, updateCreatorSocialDto: UpdateCreatorSocialDto): Promise<import("./model/creator-social.model").CreatorSocial | "CreatorSocial topilmadi">;
    remove(id: string): Promise<"CreatorSocial topilmadi" | {
        message: string;
    }>;
}
