import {ApiModelProperty} from '@nestjs/swagger';
import {IsEmail, IsNotEmpty, IsString} from 'class-validator';

export class LoginUserDto {
    @ApiModelProperty()
    @IsNotEmpty()
    @IsEmail()
    readonly email: string;

    @ApiModelProperty()
    @IsNotEmpty()
    @IsString()
    readonly password: string;
}
