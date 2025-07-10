import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UploadedFile,
  UseInterceptors,
  UseGuards,
} from '@nestjs/common';
import { MenuService } from './menus.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuard } from '../common/guards/jwt.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { RolesGuard } from '../common/guards/roles.guard';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('menus')
export class MenusController {
  constructor(private readonly menusService: MenuService) {}
 @ApiBearerAuth('token')
  @Roles("superadmin", "admin")
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Post()
  @UseInterceptors(FileInterceptor('image_url'))
  create(@Body() createMenuDto: CreateMenuDto, @UploadedFile() image_url: any) {
    return this.menusService.create(createMenuDto, image_url);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.menusService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.menusService.findOneMenu(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMenuDto: UpdateMenuDto) {
    return this.menusService.update(+id, updateMenuDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.menusService.remove(+id);
  }
}
