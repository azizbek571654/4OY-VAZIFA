import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { UserService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { SuperAdminGuard } from '../common/guards/supperadmin.guard';
import { SelfGuart } from '../common/guards/self.guard';
import { JwtAuthGuard } from '../common/guards/jwt.guard';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('users')
@ApiBearerAuth('token')
export class UsersController {
  constructor(private readonly usersService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @UseGuards(SuperAdminGuard)
  @Post()
  create(@Body() createUserDto: CreateUserDto, @Req() req: any) {
    return this.usersService.create(createUserDto, req.user);
  }
  
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.usersService.findAll();
  }
  
  @UseGuards(JwtAuthGuard)
  @UseGuards(SelfGuart)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOneuser(+id);
  }
  
  @UseGuards(JwtAuthGuard)
  @UseGuards(SelfGuart)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }
  
  @UseGuards(JwtAuthGuard)
  // @UseGuards(SelfGuart)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }

  @Get('activate/:link')
  async activate(@Param('link') link: string) {
    return this.usersService.activateUser(link);
  }
}
