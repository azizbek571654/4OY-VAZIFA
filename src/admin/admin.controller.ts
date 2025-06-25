import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  HttpCode,
} from '@nestjs/common';
import { AdminService } from './admin.service';
import { JwtAuthGuart } from '../common/guards/jwt-auth.guard';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Roles } from '../common/decorators/roles.decorator';
import { RolesGuart } from '../common/guards/role.guard';
import { SelfGuart } from '../common/guards/self.guard';
import { AddRoleDto } from './dto/add-role.dto';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}
  @Roles('ADMIN', 'SUPERADMIN')
  @UseGuards(RolesGuart)
  @UseGuards(JwtAuthGuart)
  @Post()
  create(@Body() createAdminDto: CreateAdminDto) {
    return this.adminService.create(createAdminDto);
  }

  @UseGuards(JwtAuthGuart)
  @Get()
  findAll() {
    return this.adminService.findAll();
  }
  @UseGuards(SelfGuart)
  @UseGuards(JwtAuthGuart)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adminService.findOneADMIN(+id);
  }
  @UseGuards(JwtAuthGuart)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAdminDto: UpdateAdminDto) {
    return this.adminService.update(+id, updateAdminDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adminService.remove(+id);
  }

  @HttpCode(200)
  @Roles('ADMIN', 'SUPERADMIN')
  @UseGuards(RolesGuart)
  @UseGuards(JwtAuthGuart)
  @Post('add_role')
  async addRoles(@Body() addRoledto: AddRoleDto) {
    return this.adminService.addRole(addRoledto);
  }

  @HttpCode(200)
  @Post('remove_role')
  async removeRoles(@Body() addRoledto: AddRoleDto) {
    return this.adminService.addRole(addRoledto);
  }
}
