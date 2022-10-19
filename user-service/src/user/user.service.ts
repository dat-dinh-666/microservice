import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './interfaces/create-user-dto.interface';
import { UpdateUserDto } from './interfaces/update-user-dto.interface';
import { UserRepository } from './repositories/user-repository';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}
  async get(id: number) {
    return await this.userRepository.get(id);
  }

  async create(user: CreateUserDto) {
    if (user.password_confirm !== user.password) {
      throw new BadRequestException('password_confirm does not match password');
    }
    delete user.password_confirm;
    return await this.userRepository.create(user);
  }

  async update(id: number, user: UpdateUserDto) {
    return await this.userRepository.update(id, user);
  }

  async updatePartial(id: number, user: Partial<UpdateUserDto>) {
    return await this.userRepository.updatePartial(id, user);
  }

  async delete(id: number) {
    return await this.userRepository.delete(id);
  }

  async list() {
    return await this.userRepository.list();
  }
}
