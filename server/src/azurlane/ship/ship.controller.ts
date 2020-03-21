import {Body, Controller, Get, Param, ParseUUIDPipe, Post, Request, Query, UseGuards, UsePipes} from '@nestjs/common';
import {ApiUseTags, ApiOperation} from '@nestjs/swagger';
import { ShipService } from './ship.service';
import { ShipEntity } from './ship.entity';
import { BodyParamValidationPipe } from '../../common/pipes/body-param-validation.pipe';
import { CreateShipDto } from './dto/create-ship.dto';
import { Pagination } from '../../common/paginate';

@ApiUseTags('ship')
@Controller('ship')
export class ShipController {
  constructor(private readonly shipService: ShipService) {
  }

  @Get()
  @ApiOperation({title: 'Get list of ship'})
  async list(@Request() request): Promise<Pagination<ShipEntity>> {
    return await this.shipService.list(
      {
        limit: request.query.hasOwnProperty('limit') ? request.query.limit : 10,
        page: request.query.hasOwnProperty('page') ? request.query.page : 0,
      }
    );
  }

  @Get(':id')
  @UsePipes(ParseUUIDPipe)
  @ApiOperation({title: 'Get Ship'})
  async detail(@Param('id') id: string) {
    return await this.shipService.detail(id);
  }

  @Post()
  @UsePipes(BodyParamValidationPipe)
  @ApiOperation({title: 'Create Ship'})
  async create(@Body() shipDto: CreateShipDto) {
    return await this.shipService.create(shipDto);
  }
}
