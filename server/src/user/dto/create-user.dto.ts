import { ApiModelProperty } from '@nestjs/swagger';
import {IsEmail, IsNotEmpty, IsString, MinLength} from 'class-validator';
import {IsValueEqual} from '../../common/decorator/is-value-equal.decorator';
import {DecoratorConstant} from '../../common/constants/decorator.constant';

export class CreateUserDto {
    @ApiModelProperty()
    @IsNotEmpty()
    @IsString()
    readonly name: string;

    @ApiModelProperty()
    @IsNotEmpty()
    @IsEmail()
    readonly email: string;

    @ApiModelProperty()
    @IsNotEmpty()
    @MinLength(6)
    @IsString()
    readonly password: string;

    @ApiModelProperty()
    @IsNotEmpty()
    @IsString()
    @IsValueEqual('password', {message: DecoratorConstant.INVALID_VALUE_EQUAL})
    readonly confirmPassword: string;
}
