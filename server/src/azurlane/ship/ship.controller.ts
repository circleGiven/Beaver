import {Body, Controller, Get, Param, ParseUUIDPipe, Post, Put, Query, UseGuards, UsePipes} from '@nestjs/common';
import {ApiUseTags, ApiOperation} from '@nestjs/swagger';
import { ShipService } from './ship.service';
import { ShipEntity } from './ship.entity';

@ApiUseTags('ship')
@Controller('ship')
export class ShipController {
  constructor(private readonly shipService: ShipService) {
  }

  @Get()
  @ApiOperation({title: 'Get List of All Ship'})
  async findAll(): Promise<ShipEntity[]> {
    return await this.shipService.findAll();
  }

  @Get(':id')
  @UsePipes(ParseUUIDPipe)
  @ApiOperation({title: 'Get Ship'})
  async detail(@Param('id') id: string) {
    return await this.shipService.detail(id);
  }
}
