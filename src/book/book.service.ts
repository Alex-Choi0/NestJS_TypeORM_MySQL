import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
  ) {}

  async create(createBookDto: CreateBookDto) {
    const createData = this.bookRepository.create(createBookDto);

    // 생성한 users레코드 삽입
    await this.bookRepository.save(createData);

    // 생성한 레코드를 Controller로 return
    return createData;
  }

  async findAll() {
    return await this.bookRepository.find();
  }

  async findOne(id: number) {
    return await this.bookRepository.findOne(id);
  }

  async update(id: number, updateBookDto: UpdateBookDto) {
    return await this.bookRepository.save({
      id,
      title: updateBookDto.title,
    });
  }

  async remove(id: number) {
    return await this.bookRepository.delete(id);
  }
}
