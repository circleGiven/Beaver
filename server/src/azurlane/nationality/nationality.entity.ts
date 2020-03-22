import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('nationality')
export class NationalityEntity {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({length: 50})
  name: string;

  @Column({unique: true, length: 10})
  prefix: string;

  @Column({length: 50})
  originName: string;

  @Column({default: ''})
  image: string;
}
