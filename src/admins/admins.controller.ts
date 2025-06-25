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
import { AdminsService } from './admins.service';
import { CreateAdminDto } from './dto/create-admin-temp';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { JwtAuthGuart } from '../common/guards/jwt-auth.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { RolesGuart } from '../common/guards/role.guard';
import { SelfGuart } from '../common/guards/self.guard';

@Controller('admins')
export class AdminsController {
  constructor(private readonly adminsService: AdminsService) {}

  @Roles('ADMIN', 'SUPERADMIN')
  @UseGuards(RolesGuart)
  @UseGuards(JwtAuthGuart)
  @Post()
  create(@Body() createAdminDto: CreateAdminDto) {
    return this.adminsService.create(createAdminDto);
  }
  @UseGuards(JwtAuthGuart)
  @Get()
  findAll() {
    return this.adminsService.findAll();
  }
  
  @UseGuards(SelfGuart)
  @UseGuards(JwtAuthGuart)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adminsService.findOne(+id);
  }
  @UseGuards(JwtAuthGuart)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAdminDto: UpdateAdminDto) {
    return this.adminsService.update(+id, updateAdminDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adminsService.remove(+id);
  }
}
