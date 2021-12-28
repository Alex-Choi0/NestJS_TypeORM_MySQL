// user_book_join.entity.ts : src/book/entities

import { User } from 'src/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { Book } from './book.entity';

@Entity()
export class User_Book_Join {
  // 여기서 PrimaryColumn은 userId와 bookId의 조합이다.
  @PrimaryColumn({
    nullable: false,
  })
  userId: number;

  @PrimaryColumn({
    nullable: false,
  })
  bookId: number;

  @Column({
    nullable: false,
  })
  book_review: string;

  @CreateDateColumn({ readonly: true })
  created_at: Date;

  @ManyToOne(() => User, (user) => user.id, {
    onDelete: 'CASCADE', // 해당 user레코드가 삭제시 CASCADE사용(연관 레코드 삭제)
  })
  user: User;

  @ManyToOne(() => Book, (book) => book.id)
  book: Book;
}
