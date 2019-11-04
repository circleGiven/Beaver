import {Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put, Query, UseGuards, UsePipes} from '@nestjs/common';
import {UserService} from './user.service';
import {UserEntity} from './user.entity';
import {ApiUseTags, ApiBearerAuth, ApiOperation} from '@nestjs/swagger';
import {CreateUserDto} from './dto/create-user.dto';
import {UpdateUserDto} from './dto';
import {BodyParamValidationPipe} from '../common/pipes/body-param-validation.pipe';
import {AuthGuard} from '@nestjs/passport';

@ApiUseTags('user')
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {
    }

    @Get()
    @UseGuards(AuthGuard('jwt'))
    @ApiBearerAuth()
    @ApiOperation({title: 'Get List of All Users'})
    async findAll(): Promise<UserEntity[]> {
        return await this.userService.findAll();
    }

    @Post()
    @UseGuards(AuthGuard('jwt'))
    @UsePipes(BodyParamValidationPipe)
    @ApiBearerAuth()
    @ApiOperation({title: 'Create User'})
    async create(@Body() userData: CreateUserDto) {
        // TODO 변경요망
        return await this.userService.create(userData);
    }

    @Get('/duplicated')
    @ApiOperation({title: 'Validate duplicated email'})
    async duplicatedUser(@Query('email') email: string) {
        return await this.userService.isDuplicated(email);
    }

    @Get(':id')
    @UseGuards(AuthGuard('jwt'))
    @UsePipes(ParseUUIDPipe)
    @ApiBearerAuth()
    @ApiOperation({title: 'Get User'})
    async detail(@Param('id') id: string) {
        return await this.userService.detail(id);
    }

    @Put(':id')
    @UseGuards(AuthGuard('jwt'))
    @ApiBearerAuth()
    @ApiOperation({title: 'Modify User'})
    async update(@Param('id', new ParseUUIDPipe()) id: string, @Body(new BodyParamValidationPipe()) updateUserDto: UpdateUserDto) {
        return await this.userService.update(id, updateUserDto);
    }

    @Delete(':id')
    @UseGuards(AuthGuard('jwt'))
    @UsePipes(ParseUUIDPipe)
    @ApiBearerAuth()
    @ApiOperation({title: 'Remove User'})
    async delete(@Param('id') id: string) {
        return await this.userService.delete(id);
    }
}
