import { CreateKurierDto } from './dto/create-kurier.dto';
import { UpdateKurierDto } from './dto/update-kurier.dto';
import { Kurier } from './model/kurier.model';
export declare class KurierService {
    private readonly KurierModel;
    constructor(KurierModel: typeof Kurier);
    create(createKurierDto: CreateKurierDto): Promise<Kurier | "kurier yaratilmadi">;
    findAll(): Promise<Kurier[] | "kurierlar topilmadi">;
    findOne(id: number): Promise<Kurier | "kurier topilmadi" | null>;
    update(id: number, updateKurierDto: UpdateKurierDto): Promise<Kurier | "kurier topilmadi">;
    remove(id: number): Promise<"kurier topilmadi" | {
        message: string;
    }>;
}
