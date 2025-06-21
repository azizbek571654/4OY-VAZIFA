import { KurierService } from './kurier.service';
import { CreateKurierDto } from './dto/create-kurier.dto';
import { UpdateKurierDto } from './dto/update-kurier.dto';
export declare class KurierController {
    private readonly kurierService;
    constructor(kurierService: KurierService);
    create(createKurierDto: CreateKurierDto): Promise<import("./model/kurier.model").Kurier | "kurier yaratilmadi">;
    findAll(): Promise<import("./model/kurier.model").Kurier[] | "kurierlar topilmadi">;
    findOne(id: string): Promise<import("./model/kurier.model").Kurier | "kurier topilmadi" | null>;
    update(id: string, updateKurierDto: UpdateKurierDto): Promise<import("./model/kurier.model").Kurier | "kurier topilmadi">;
    remove(id: string): Promise<"kurier topilmadi" | {
        message: string;
    }>;
}
