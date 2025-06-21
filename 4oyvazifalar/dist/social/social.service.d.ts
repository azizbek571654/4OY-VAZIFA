import { CreateSocialDto } from './dto/create-social.dto';
import { UpdateSocialDto } from './dto/update-social.dto';
import { Social } from './model/social.model';
export declare class SocialService {
    private readonly SocialModel;
    constructor(SocialModel: typeof Social);
    create(createSocialDto: CreateSocialDto): Promise<Social | "social yaratilmadi">;
    findAll(): Promise<Social[] | "sociallar topilmadi">;
    findOneSOCIAL(id: number): Promise<Social | "social topilmadi" | null>;
    update(id: number, updateSocialDto: UpdateSocialDto): Promise<Social | "social topilmadi">;
    remove(id: number): Promise<"social topilmadi" | {
        message: string;
    }>;
}
