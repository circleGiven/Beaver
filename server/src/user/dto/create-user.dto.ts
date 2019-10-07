import { ApiModelProperty } from '@nestjs/swagger';
import {IsEmail, IsNotEmpty} from 'class-validator';
import {IsValueEqual} from '../../common/decorator/is-value-equal.decorator';
import {DecoratorConstant} from '../../common/constants/decorator.constant';

export class CreateUserDto {
    @ApiModelProperty()
    @IsNotEmpty()
    readonly name: string;

    @ApiModelProperty()
    @IsEmail()
    @IsNotEmpty()
    readonly email: string;

    @ApiModelProperty()
    @IsNotEmpty()
    readonly password: string;

    @ApiModelProperty()
    @IsNotEmpty()
    @IsValueEqual('password', {message: DecoratorConstant.INVALID_VALUE_EQUAL})
    readonly confirmPassword: string;
}
