// users.module.ts : src/book

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { Book } from './entities/book.entity';
import { User_Book_Join } from './entities/user_book_join.entity';

@Module({
  // TypeOrmModule.forFeature안에 User_Book_Join을 추가한다.
  imports: [TypeOrmModule.forFeature([Book, User_Book_Join])],
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule {}
