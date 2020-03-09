import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {getRepository, Repository} from 'typeorm';
import { UserEntity } from './user.entity';
import {CreateUserDto, UpdateUserDto} from './dto';
import {UserConstant} from './user.constant';
import {ResultResponse} from '../common/result.response';
import * as _ from 'lodash';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>) {
    }

    async findAll(): Promise<UserEntity[]> {
        return await this.userRepository.find();
    }

    async findOne(options): Promise<UserEntity> {
        return await this.userRepository.findOne(options);
    }

    async findById(id: string): Promise<UserEntity> {
        return await this.userRepository.findOne({id: id});
    }

    async findByEmail(email: string): Promise<UserEntity> {
        return await this.userRepository.findOne({email: email});
    }

    async save(user: UserEntity): Promise<UserEntity> {
        return await this.userRepository.save(user);
    }

    async isDuplicated(email: string): Promise<ResultResponse> {
        const user: UserEntity = await this.findByEmail(email);
        return new ResultResponse({duplicated: this.isEmptyUser(user) === false}, HttpStatus.OK);
    }

    async detail(id: string) {
        const user: UserEntity = await this.findById(id);
        // if not find user
        if (this.isEmptyUser(user)) {
            throw new HttpException(UserConstant.ResultMessage.NOT_FOUND_USER, HttpStatus.BAD_REQUEST);
        }
        return user;
    }

    async create(dto: CreateUserDto) {
        const {name, email, password} = dto;
        const queryBuilder = await getRepository(UserEntity)
            .createQueryBuilder('user')
            .where('user.email = :email', {email});
        const user: UserEntity = await queryBuilder.getOne();
        // if not find User
        if (this.isEmptyUser(user) === false) {
            throw new HttpException(UserConstant.ResultMessage.DUPLICATED_EMAIL, HttpStatus.BAD_REQUEST);
        }
        // create user
        const entity = new UserEntity();
        entity.name = name;
        entity.email = email;
        entity.password = password;
        const savedUser = await this.userRepository.save(entity);

        return this.buildUserRO(savedUser, HttpStatus.CREATED, UserConstant.ResultMessage.SUCCESS_USER_CREATED);
    }

    async update(id: string, dto: UpdateUserDto) {
        const user: UserEntity = await this.findById(id);
        // if not find user
        if (this.isEmptyUser(user)) {
            throw new HttpException(UserConstant.ResultMessage.NOT_FOUND_USER, HttpStatus.BAD_REQUEST);
        }
        await this.userRepository.update(user.id, dto);
        return this.buildUserRO(user, HttpStatus.OK, UserConstant.ResultMessage.SUCCESS_USER_MODIFIED);
    }

    async delete(id: string) {
        const user: UserEntity = await this.findById(id);
        // if not find User
        if (this.isEmptyUser(user)) {
            throw new HttpException(UserConstant.ResultMessage.NOT_FOUND_USER, HttpStatus.BAD_REQUEST);
        } else {
            await this.userRepository.delete({id: id});
            return this.buildUserRO(user, HttpStatus.OK, UserConstant.ResultMessage.SUCCESS_USER_REMOVED);
        }
    }

    private buildUserRO(user: UserEntity, status: number, message: string) {
        const result = {
            email: user.email,
        };
        return new ResultResponse(result, status, message);
    }

    private isEmptyUser(user: UserEntity): boolean {
        return _.isNil(user);
    }
}
