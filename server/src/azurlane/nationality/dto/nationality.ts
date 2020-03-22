import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class Nationality {

  @ApiModelProperty({required: true, maxLength: 50})
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @ApiModelProperty({required: true, maxLength: 50})
  @IsNotEmpty()
  @IsString()
  readonly originName: string;

  @ApiModelProperty({required: true, maxLength: 50})
  @IsNotEmpty()
  @IsString()
  readonly image: string;

  @ApiModelProperty({required: true, maxLength: 10})
  @IsNotEmpty()
  @IsString()
  readonly prefix: string;
}
