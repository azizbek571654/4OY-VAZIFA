import {
  IsString,
  IsEmail,
  MinLength,
  MaxLength,
  Matches,
  IsNotEmpty,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Payment } from '../model/payment.model';

export class CreatePaymentDto implements Partial<Payment> {
  order_id: number;
  user_id: number;
  payment_method: string;
  status: string;
  payed_at: Date;
}
