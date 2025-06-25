export class CreateProductOrderDto {
  buyer_id: number;
  product_id: number;
  quality: number;
  total_prise: number;
  status: string;
  delivery_addres: string;
  phone_number: string;
  kurier_id: number;
  delivery_status: string;
}
