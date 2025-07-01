import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { IsCreatorGuard } from '../common/guard/isCreator.guard';
import { SelfGuart } from '../common/guard/self.guard';
import { JwtAuthGuard } from '../common/guard/user.guard';

@Controller("admin")
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @UseGuards(IsCreatorGuard)
  @Post()
  create(@Body() createAdminDto: CreateAdminDto) {
    return this.adminService.create(createAdminDto);
  }
  
  @UseGuards(SelfGuart, JwtAuthGuard)
  @Get()
  findAll() {
    return this.adminService.findAll();
  }
  
  @UseGuards(SelfGuart)
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.adminService.findOne(+id);
  }
  // @UseGuards(SelfGuart, JwtAuthGuard)
  @UseGuards(IsCreatorGuard)
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateAdminDto: UpdateAdminDto) {
    return this.adminService.update(+id, updateAdminDto);
  }
  @UseGuards(IsCreatorGuard)
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.adminService.remove(+id);
  }
  @Get("activate/:link")
  activateUser(@Param("link") link: string) {
    return this.adminService.activateAser(link);
  }
}
