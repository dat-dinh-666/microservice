import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../../database/database.service';
import { CreateUserDto } from '../interfaces/create-user-dto.interface';
import { UpdateUserDto } from '../interfaces/update-user-dto.interface';

@Injectable()
export class UserRepository {
  constructor(private database: DatabaseService) {}

  async get(id: number) {
    return await this.database.user.findFirst({
      where: {
        id,
      },
    });
  }

  async create(user: Omit<CreateUserDto, 'remember_password'>) {
    return await this.database.user.create({
      data: user,
    });
  }

  async update(id: number, user: UpdateUserDto) {
    return await this.database.user.update({
      where: {
        id,
      },
      data: user,
    });
  }

  async updatePartial(id: number, user: Partial<UpdateUserDto>) {
    return await this.database.user.update({
      where: {
        id,
      },
      data: user,
    });
  }

  async delete(id: number) {
    return await this.database.user.delete({
      where: {
        id,
      },
    });
  }

  async list() {
    return await this.database.user.findMany();
  }
}
