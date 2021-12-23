// users.entity.ts : src/users/entities
import {
  Column,
  CreateDateColumn,
  Entity,
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
}
