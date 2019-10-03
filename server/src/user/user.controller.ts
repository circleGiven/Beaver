import {Body, Controller, Get, Post} from '@nestjs/common';
import {UserService} from './user.service';
import {UserEntity} from './user.entity';
import {ApiUseTags, ApiBearerAuth} from '@nestjs/swagger';
import {CreateUserDto} from './dto/create-user.dto';

@ApiBearerAuth()
@ApiUseTags('user')
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {
    }

    @Get()
    async findAll(): Promise<UserEntity[]> {
        return await this.userService.findAll();
    }

    @Post()
    async create(@Body() userData: CreateUserDto) {
        return await this.userService.create(userData);
    }
}
