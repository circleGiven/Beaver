import {Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put, Query, UsePipes} from '@nestjs/common';
import {UserService} from './user.service';
import {UserEntity} from './user.entity';
import {ApiUseTags, ApiBearerAuth} from '@nestjs/swagger';
import {CreateUserDto} from './dto/create-user.dto';
import {LoginUserDto, UpdateUserDto} from './dto';
import {BodyParamValidationPipe} from '../common/pipes/body-param-validation.pipe';

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
    @UsePipes(BodyParamValidationPipe)
    async create(@Body() userData: CreateUserDto) {
        return await this.userService.create(userData);
    }

    @Post('login')
    @UsePipes(BodyParamValidationPipe)
    async login(@Body() loginUserDto: LoginUserDto) {
        return this.userService.login(loginUserDto);
    }

    @Get('/duplicated')
    async duplicatedUser(@Query('email') email: string) {
        return this.userService.isDuplicated(email);
    }

    @Get(':id')
    @UsePipes(ParseUUIDPipe)
    async detail(@Param('id') id: string) {
        return this.userService.detail(id);
    }

    @Put(':id')
    async update(@Param('id', new ParseUUIDPipe()) id: string, @Body(new BodyParamValidationPipe()) updateUserDto: UpdateUserDto) {
        return await this.userService.update(id, updateUserDto);
    }

    @Delete(':id')
    @UsePipes(ParseUUIDPipe)
    async delete(@Param('id') id: string) {
        return await this.userService.delete(id);
    }
}
