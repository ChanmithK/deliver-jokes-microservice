import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Jokes {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  jokeId: string;

  @Column()
  type: string;

  @Column()
  content: string;
}
