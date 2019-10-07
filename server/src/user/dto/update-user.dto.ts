import { ApiModelProperty } from '@nestjs/swagger';

export class UpdateUserDto {

    @ApiModelProperty()
    readonly name: string;

    @ApiModelProperty()
    readonly email: string;

    @ApiModelProperty()
    readonly password: string;

    @ApiModelProperty()
    readonly confirmPassword: string;
}
