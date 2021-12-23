// users.service.ts : src/users

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  // users레코드 생성
  async create(createUserDto: CreateUserDto) {
    const createData = this.userRepository.create(createUserDto);

    // 생성한 users레코드 삽입
    await this.userRepository.save(createData);

    // 생성한 레코드를 Controller로 return
    return createData;
  }

  // DB에 있는 모든 레코드 조회
  async findAll() {
    return await this.userRepository.find();
  }

  // 해당 ID에 있는 레코드 조회
  async findOne(id: number) {
    return await this.userRepository.findOne(id);
  }

  // 해당 ID에 있는 레코드를 수정
  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.userRepository.save({
      id,
      full_name: updateUserDto.full_name,
    });
  }

  // 해당 ID에 있는 레코드 삭제
  async remove(id: number) {
    return await this.userRepository.delete(id);
  }
}
