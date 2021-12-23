import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfig } from './typeorm.config';
import { UsersModule } from './users/users.module';
import { BookModule } from './book/book.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), UsersModule, BookModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
