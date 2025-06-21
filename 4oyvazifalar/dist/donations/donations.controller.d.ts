import { DonationsService } from './donations.service';
import { CreateDonationDto } from './dto/create-donation.dto';
import { UpdateDonationDto } from './dto/update-donation.dto';
export declare class DonationsController {
    private readonly donationsService;
    constructor(donationsService: DonationsService);
    create(createDonationDto: CreateDonationDto): Promise<import("./model/donation.model").Donation | "donation yaratilmadi">;
    findAll(): Promise<import("./model/donation.model").Donation[] | "donationlar topilmadi">;
    findOne(id: string): Promise<import("./model/donation.model").Donation | "donation topilmadi" | null>;
    update(id: string, updateDonationDto: UpdateDonationDto): Promise<import("./model/donation.model").Donation | "donation topilmadi">;
    remove(id: string): Promise<"donation topilmadi" | {
        message: string;
    }>;
}
