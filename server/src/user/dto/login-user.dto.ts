import {ApiModelProperty} from '@nestjs/swagger';
import {IsEmail, IsNotEmpty} from 'class-validator';

export class LoginUserDto {
    @ApiModelProperty()
    @IsEmail()
    @IsNotEmpty()
    readonly email: string;

    @ApiModelProperty()
    @IsNotEmpty()
    readonly password: string;
}
