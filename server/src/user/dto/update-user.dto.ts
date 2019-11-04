import { ApiModelProperty } from '@nestjs/swagger';
import {IsOptional, IsString, MinLength} from 'class-validator';
import {IsValueEqual} from '../../common/decorator/is-value-equal.decorator';
import {DecoratorConstant} from '../../common/constants/decorator.constant';

export class UpdateUserDto {
    @ApiModelProperty({required: false, maxLength: 100, example: 'test'})
    @IsOptional()
    @IsString()
    readonly name?: string;

    @ApiModelProperty({required: false, minLength: 6, example: 'test123'})
    @IsOptional()
    @IsString()
    @MinLength(6)
    readonly password?: string;

    @ApiModelProperty({required: false, minLength: 6, example: 'test123'})
    @IsOptional()
    @IsString()
    @IsValueEqual('password', {message: DecoratorConstant.INVALID_VALUE_EQUAL})
    readonly confirmPassword?: string;
}
