// book.entity.ts : src/book/entities
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User_Book_Join } from './user_book_join.entity';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: Number;

  @Column({
    nullable: false,
  })
  title: string;

  @CreateDateColumn({ readonly: true })
  created_at: Date;

  @OneToMany(() => User_Book_Join, (bookJoin) => bookJoin.bookId)
  bookJoin: User_Book_Join;
}
