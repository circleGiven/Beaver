import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {getRepository, Repository} from 'typeorm';
import { UserEntity } from './user.entity';
import {CreateUserDto} from './dto/create-user.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>) {
    }

    async findAll(): Promise<UserEntity[]> {
        return await this.userRepository.find();
    }

    async create(dto: CreateUserDto) {
        const {name, email, password, confirmPassword} = dto;
        const qb = await getRepository(UserEntity)
            .createQueryBuilder('user')
            .where('user.email = :email', {email});
        const user = await qb.getOne();

        if (user) {
            const errors = {username: 'Email must be unique.'};
            throw new HttpException({message: 'Input data validation failed', errors}, HttpStatus.BAD_REQUEST);
        }

        // create new user
        const entity = new UserEntity();
        entity.name = name;
        entity.email = email;
        entity.password = password;
        entity.confirmPassword = confirmPassword;

        const savedUser = await this.userRepository.save(entity);
        return this.buildUserRO(savedUser);
    }

    private buildUserRO(user: UserEntity) {
        const userRO = {
            name: user.name,
            email: user.email,
        };
        return {user: userRO};
    }
}
