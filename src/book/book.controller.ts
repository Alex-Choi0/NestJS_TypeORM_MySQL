// book.controller.ts : src/book/

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  create(@Body() createBookDto: CreateBookDto) {
    return this.bookService.create(createBookDto);
  }

  @Get()
  findAll() {
    return this.bookService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.bookService.update(+id, updateBookDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookService.remove(+id);
  }

    // 아래부터는 JoiinTable 컨트롤 부분

  @Get('/join/all')
  async getJoin() {
    console.log('active');
    // return 'done';
    return await this.bookService.getJoin();
  }
  @Post('/join')
  async postJoin(
    @Body('userId') userId: number,
    @Body('bookId') bookId: number,
    @Body('book_review') book_review: string,
  ) {
    return await this.bookService.postJoin(userId, bookId, book_review);
  }
  @Patch('/join')
  async patchJoin(
    @Query('userId') userId: number,
    @Query('bookId') bookId: number,
    @Body('book_review') book_review: string,
  ) {
    return await this.bookService.patchJoin(userId, bookId, book_review);
  }
  @Delete('/join')
  async deleteJoin(
    @Query('userId') userId: number,
    @Query('bookId') bookId: number,
  ) {
    return await this.bookService.deleteJoin(userId, bookId);
  }
}
