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
import { ResturantTableService } from './resturant_tables.service';
import { CreateResturantTableDto } from './dto/create-resturant_table.dto';
import { UpdateResturantTableDto } from './dto/update-resturant_table.dto';
import { SelfGuart } from '../common/guards/self.guard';
import { JwtAuthGuard } from '../common/guards/jwt.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { RolesGuard } from '../common/guards/roles.guard';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('resturant-tables')
@ApiBearerAuth('token')
export class ResturantTablesController {
  constructor(private readonly resturantTableService: ResturantTableService) {}

  @Roles("superadmin")
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Post()
  create(@Body() createResturantTableDto: CreateResturantTableDto) {
    return this.resturantTableService.create(createResturantTableDto);
  }
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.resturantTableService.findAll();
  }
  
  @UseGuards(JwtAuthGuard)
  // @UseGuards(SelfGuart)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.resturantTableService.findOneResturantTables(+id);
  }
  
  @UseGuards(JwtAuthGuard)
  // @UseGuards(SelfGuart)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateResturantTableDto: UpdateResturantTableDto,
  ) {
    return this.resturantTableService.update(+id, updateResturantTableDto);
  }
  
  @UseGuards(JwtAuthGuard)
  // @UseGuards(SelfGuart)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.resturantTableService.remove(+id);
  }
}
