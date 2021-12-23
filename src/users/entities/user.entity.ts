// users.entity.ts : src/users/entities
import { User_Book_Join } from 'src/book/entities/user_book_join.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: Number;

  @Column({
    nullable: false,
  })
  full_name: string;

  @CreateDateColumn({ readonly: true })
  created_at: Date;

  @OneToMany(() => User_Book_Join, (userJoin) => userJoin.userId)
  userBook: User_Book_Join;
}
