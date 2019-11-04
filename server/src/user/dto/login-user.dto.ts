import {ApiModelProperty} from '@nestjs/swagger';
import {IsEmail, IsNotEmpty, IsString} from 'class-validator';

export class LoginUserDto {
    @ApiModelProperty({required: true, maxLength: 50, example: 'test@test.com'})
    @IsNotEmpty()
    @IsEmail()
    readonly email: string;

    @ApiModelProperty({required: true, minLength: 6, example: 'test123'})
    @IsNotEmpty()
    @IsString()
    readonly password: string;
}
