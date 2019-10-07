import { ApiModelProperty } from '@nestjs/swagger';
import {IsOptional, IsString} from 'class-validator';

export class UpdateUserDto {

    @ApiModelProperty()
    @IsOptional()
    @IsString()
    readonly name?: string;

    @ApiModelProperty()
    @IsOptional()
    @IsString()
    readonly password?: string;

    @ApiModelProperty()
    @IsOptional()
    @IsString()
    readonly confirmPassword?: string;
}
