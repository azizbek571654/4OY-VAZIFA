import { CreateDonationDto } from './dto/create-donation.dto';
import { UpdateDonationDto } from './dto/update-donation.dto';
import { Donation } from './model/donation.model';
export declare class DonationsService {
    private readonly donationModel;
    constructor(donationModel: typeof Donation);
    create(createDonationDto: CreateDonationDto): Promise<Donation | "donation yaratilmadi">;
    findAll(): Promise<Donation[] | "donationlar topilmadi">;
    findOne(id: number): Promise<Donation | "donation topilmadi" | null>;
    update(id: number, updateDonationDto: UpdateDonationDto): Promise<Donation | "donation topilmadi">;
    remove(id: number): Promise<"donation topilmadi" | {
        message: string;
    }>;
}
