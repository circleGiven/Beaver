import {HttpException, HttpStatus, Injectable, UnauthorizedException} from '@nestjs/common';
import {UserService} from '../user/user.service';
import {CreateUserDto, LoginUserDto} from '../user/dto';
import * as crypto from 'crypto';
import {UserConstant} from '../user/user.constant';
import {UserEntity} from '../user/user.entity';
import * as _ from 'lodash';
import {ResultResponse} from '../common/result.response';
import {JwtService} from '@nestjs/jwt';
import {AuthConstant} from './auth.constant';
import {TokenPayload} from './token.payload';
import {getRepository} from 'typeorm';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService,
                private readonly jwtService: JwtService) {}

    async login(loginUserDto: LoginUserDto) {
        const options = {
            email: loginUserDto.email,
            password: crypto.createHmac(UserConstant.PasswordAlgorithm.SHA256, loginUserDto.password).digest('hex'),
        };
        const user: UserEntity = await this.userService.findOne(options);
        // if not find user
        if (this.isEmptyUser(user)) {
            throw new UnauthorizedException(UserConstant.ResultMessage.FAIL_LOGIN);
        }
        return new ResultResponse(this.generateToken(user), HttpStatus.OK);
    }

    async register(createUserDto: CreateUserDto) {
        const {name, email, password} = createUserDto;
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
        const savedUser = await this.userService.save(entity);
        return new ResultResponse({email: email}, HttpStatus.CREATED, UserConstant.ResultMessage.SUCCESS_USER_CREATED);
    }

    async validateUser(id: string) {
        return await this.userService.findById(id);
    }

    private generateToken(user: UserEntity): string {
        const payload: TokenPayload = {userId: user.id, userName: user.name, userEmail: user.email};
        return this.jwtService.sign(payload, {expiresIn: AuthConstant.expireTime});
    }

    private isEmptyUser(user: UserEntity): boolean {
        return _.isNil(user);
    }
}
