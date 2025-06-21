import { SocialService } from './social.service';
import { CreateSocialDto } from './dto/create-social.dto';
import { UpdateSocialDto } from './dto/update-social.dto';
export declare class SocialController {
    private readonly socialService;
    constructor(socialService: SocialService);
    create(createSocialDto: CreateSocialDto): Promise<import("./model/social.model").Social | "social yaratilmadi">;
    findAll(): Promise<import("./model/social.model").Social[] | "sociallar topilmadi">;
    findOne(id: string): Promise<import("./model/social.model").Social | "social topilmadi" | null>;
    update(id: string, updateSocialDto: UpdateSocialDto): Promise<import("./model/social.model").Social | "social topilmadi">;
    remove(id: string): Promise<"social topilmadi" | {
        message: string;
    }>;
}
