import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity('ship')
export class ShipEntity {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({length: 50})
  name: string;

  @Column({length: 50})
  cnName: string;

  @Column({length: 50})
  enName: string;

  @Column({length: 50})
  jpName: string;

  @Column({default: ''})
  image: string;

  @Column({default: ''})
  imageThumb: string;

  @Column({type: 'datetime', default: () => 'CURRENT_TIMESTAMP'})
  createdTime: Date;
  @Column({type: 'datetime', default: () => 'CURRENT_TIMESTAMP'})
  modifiedTime: Date;
}
