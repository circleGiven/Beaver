import { ApiModelProperty } from '@nestjs/swagger';
import {IsEmail, IsNotEmpty, IsString, MinLength} from 'class-validator';
import {IsValueEqual} from '../../common/decorator/is-value-equal.decorator';
import {DecoratorConstant} from '../../common/constants/decorator.constant';

export class CreateUserDto {
    @ApiModelProperty({required: true, maxLength: 100, example: 'test'})
    @IsNotEmpty()
    @IsString()
    readonly name: string;

    @ApiModelProperty({required: true, maxLength: 50, example: 'test@test.com'})
    @IsNotEmpty()
    @IsEmail()
    readonly email: string;

    @ApiModelProperty({required: true, minLength: 6, example: 'test123'})
    @IsNotEmpty()
    @MinLength(6)
    @IsString()
    readonly password: string;

    @ApiModelProperty({required: true, minLength: 6, example: 'test123'})
    @IsNotEmpty()
    @IsString()
    @IsValueEqual('password', {message: DecoratorConstant.INVALID_VALUE_EQUAL})
    readonly confirmPassword: string;
}
