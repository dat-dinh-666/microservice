import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './interfaces/create-user-dto.interface';
import { UpdateUserDto } from './interfaces/update-user-dto.interface';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  async getList() {
    return await this.userService.list();
  }

  @Get(':id')
  async getById(@Param('id') id: number) {
    return await this.userService.get(Number(id));
  }

  @Post()
  async create(@Body() body: CreateUserDto) {
    return await this.userService.create(body);
  }

  @Put(':id')
  async updateFull(@Param('id') id: number, @Body() body: UpdateUserDto) {
    return await this.userService.update(id, body);
  }

  @Patch(':id')
  async updatePartial(
    @Param('id') id: number,
    @Body() body: Partial<UpdateUserDto>,
  ) {
    return await this.userService.updatePartial(id, body);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return await this.userService.delete(id);
  }
}
