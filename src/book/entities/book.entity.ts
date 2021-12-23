// book.entity.ts : src/book/entities
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: Number;

  @Column({
    nullable: false,
  })
  comment: string;

  @CreateDateColumn({ readonly: true })
  created_at: Date;
}
