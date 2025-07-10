import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { PaymentService } from './payment.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { JwtAuthGuard } from '../common/guards/jwt.guard';
import { SelfGuart } from '../common/guards/self.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { RolesGuard } from '../common/guards/roles.guard';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @ApiBearerAuth('token')
  @Roles("customer")
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Post()
  create(@Body() createPaymentDto: CreatePaymentDto) {
    return this.paymentService.create(createPaymentDto);
  }
  
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.paymentService.findAll();
  }
  
  @UseGuards(JwtAuthGuard)
  @UseGuards(SelfGuart)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paymentService.findOnePayment(+id);
  }
  
  @UseGuards(JwtAuthGuard)
  @UseGuards(SelfGuart)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePaymentDto: UpdatePaymentDto) {
    return this.paymentService.update(+id, updatePaymentDto);
  }
  
  @UseGuards(JwtAuthGuard)
  @UseGuards(SelfGuart)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paymentService.remove(+id);
  }
}
