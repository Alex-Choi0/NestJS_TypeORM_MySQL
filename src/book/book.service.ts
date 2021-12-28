// book.service.ts : src/book/entities
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';
import { User_Book_Join } from './entities/user_book_join.entity';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
    @InjectRepository(User_Book_Join)
    private readonly user_Book_JoinRepository: Repository<User_Book_Join>,
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

  // 아래부터는 JoiinTable 서비스 부분
  async getJoin() {
    console.log('run getJoin');
    try {
      return await this.user_Book_JoinRepository.find({
        where: {},
      });
    } catch (err) {
      console.log('message : ', err);
    }
  }
  async postJoin(userId: number, bookId: number, book_review: string) {
    const createData = this.user_Book_JoinRepository.create({
      userId,
      bookId,
      book_review,
    });

    await this.user_Book_JoinRepository.save(createData);

    return createData;
  }
  async patchJoin(userId: number, bookId: number, book_review: string) {
    const find = await this.user_Book_JoinRepository.find({
      userId,
      bookId,
    });

    const createData = this.user_Book_JoinRepository.create({
      ...find,
      book_review,
    });
    await this.user_Book_JoinRepository.save(createData);

    return createData;
  }
  async deleteJoin(userId: number, bookId: number) {
    const find = await this.user_Book_JoinRepository.find({
      userId,
      bookId,
    });

    await this.user_Book_JoinRepository.delete({
      userId,
      bookId,
    });

    return find;
  }
}
