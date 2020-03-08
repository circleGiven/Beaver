import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ShipConstant } from '../ship.constant';

export class UpdateShipDto {
  @ApiModelProperty({required: false, maxLength: ShipConstant.DTO.SHIP_NAME_MAX_LENGTH, example: '엔터프라이즈'})
  @IsOptional()
  @IsString()
  readonly name?: string;

  @ApiModelProperty({required: false, maxLength: ShipConstant.DTO.SHIP_NAME_MAX_LENGTH, example: '엔터프라이즈'})
  @IsNotEmpty()
  @IsString()
  readonly cnName?: string;

  @ApiModelProperty({required: false, maxLength: ShipConstant.DTO.SHIP_NAME_MAX_LENGTH, example: '엔터프라이즈'})
  @IsNotEmpty()
  @IsString()
  readonly enName?: string;

  @ApiModelProperty({required: false, maxLength: ShipConstant.DTO.SHIP_NAME_MAX_LENGTH, example: '엔터프라이즈'})
  @IsNotEmpty()
  @IsString()
  readonly jpName?: string;

  @ApiModelProperty({required: false, maxLength: 50, example: 'path'})
  @IsNotEmpty()
  @IsString()
  readonly image?: string;
}
