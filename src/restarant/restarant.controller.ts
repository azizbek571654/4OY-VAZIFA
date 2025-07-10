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
import { RestarantService } from './restarant.service';
import { CreateRestarantDto } from './dto/create-restarant.dto';
import { UpdateRestarantDto } from './dto/update-restarant.dto';
import { SelfGuart } from '../common/guards/self.guard';
import { JwtAuthGuard } from '../common/guards/jwt.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { RolesGuard } from '../common/guards/roles.guard';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('restarant')
@ApiBearerAuth('token')
export class RestarantController {
  constructor(private readonly restarantService: RestarantService) {}

  @Roles("superadmin")
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Post()
  create(@Body() createRestarantDto: CreateRestarantDto) {
    return this.restarantService.create(createRestarantDto);
  }
  
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.restarantService.findAll();
  }
  
  @UseGuards(JwtAuthGuard)
  // @UseGuards(SelfGuart)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.restarantService.findOneRestarant(+id);
  }
  
  @UseGuards(JwtAuthGuard)
  // @UseGuards(SelfGuart)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateRestarantDto: UpdateRestarantDto,
  ) {
    return this.restarantService.update(+id, updateRestarantDto);
  }
  
  @UseGuards(JwtAuthGuard)
  // @UseGuards(SelfGuart)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.restarantService.remove(+id);
  }
}
