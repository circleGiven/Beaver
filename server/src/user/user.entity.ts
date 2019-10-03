import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity('user')
export class UserEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({length: 100})
    name: string;

    @Column({length: 50})
    email: string;

    @Column({length: 50})
    password: string;

    @Column({length: 50})
    confirmPassword: string;
}
