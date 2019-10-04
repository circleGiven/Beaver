import { ApiModelProperty } from '@nestjs/swagger';
import {IsEmail, IsNotEmpty} from 'class-validator';

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
    readonly confirmPassword: string;
}
