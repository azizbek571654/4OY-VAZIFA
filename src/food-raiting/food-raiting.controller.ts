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
import { FoodRaitingService } from './food-raiting.service';
import { CreateFoodRaitingDto } from './dto/create-food-raiting.dto';
import { UpdateFoodRaitingDto } from './dto/update-food-raiting.dto';
import { SelfGuart } from '../common/guards/self.guard';
import { JwtAuthGuard } from '../common/guards/jwt.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { RolesGuard } from '../common/guards/roles.guard';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('food-raiting')
@ApiBearerAuth('token')
export class FoodRaitingController {
  constructor(private readonly foodRaitingService: FoodRaitingService) {}

  @Roles('customer')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createFoodRaitingDto: CreateFoodRaitingDto) {
    return this.foodRaitingService.create(createFoodRaitingDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.foodRaitingService.findAll();
  }

  @Get('/top-rated')
  getTopRated() {
    return this.foodRaitingService.getTopRatedMenus();
  }

  @Get('/gender-stats/:id')
  getGenderStats(@Param('id') id: string) {
    return this.foodRaitingService.getGenderRatingStats(+id);
  }

  @Get('/age-stat/:id')
  getAgeStat(@Param('id') id: string) {
    return this.foodRaitingService.getAgeStatisticsByFoodId(+id);
  }

  @UseGuards(JwtAuthGuard, SelfGuart)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.foodRaitingService.findOneFoodRaiting(+id);
  }

  @UseGuards(JwtAuthGuard, SelfGuart)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFoodRaitingDto: UpdateFoodRaitingDto,
  ) {
    return this.foodRaitingService.update(+id, updateFoodRaitingDto);
  }

  @UseGuards(JwtAuthGuard, SelfGuart)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.foodRaitingService.remove(+id);
  }
}
