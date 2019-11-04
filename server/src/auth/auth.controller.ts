import {Body, Controller, Post, UsePipes} from '@nestjs/common';
import {ApiOperation, ApiUseTags} from '@nestjs/swagger';
import {BodyParamValidationPipe} from '../common/pipes/body-param-validation.pipe';
import {CreateUserDto, LoginUserDto} from '../user/dto';
import {AuthService} from './auth.service';

@ApiUseTags('auth')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('login')
    @UsePipes(BodyParamValidationPipe)
    @ApiOperation({title: 'Login User'})
    async login(@Body() loginUserDto: LoginUserDto) {
        return await this.authService.login(loginUserDto);
    }

    @Post('register')
    @UsePipes(BodyParamValidationPipe)
    @ApiOperation({title: 'Register User'})
    async register(@Body() createUserDto: CreateUserDto) {
        return await this.authService.register(createUserDto);
    }
}
