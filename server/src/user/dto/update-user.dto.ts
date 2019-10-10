import { ApiModelProperty } from '@nestjs/swagger';
import {IsOptional, IsString, MinLength} from 'class-validator';
import {IsValueEqual} from '../../common/decorator/is-value-equal.decorator';
import {DecoratorConstant} from '../../common/constants/decorator.constant';

export class UpdateUserDto {

    @ApiModelProperty()
    @IsOptional()
    @IsString()
    readonly name?: string;

    @ApiModelProperty()
    @IsOptional()
    @IsString()
    @MinLength(6)
    readonly password?: string;

    @ApiModelProperty()
    @IsOptional()
    @IsString()
    @IsValueEqual('password', {message: DecoratorConstant.INVALID_VALUE_EQUAL})
    readonly confirmPassword?: string;
}
