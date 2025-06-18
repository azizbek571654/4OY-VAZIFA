import { Social } from "../model/social.model";

export class CreateSocialDto {
    title: string;
    description: string;
    kurier_id: number;
    category_id: number;
}
