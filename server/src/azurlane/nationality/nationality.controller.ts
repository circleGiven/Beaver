import { ApiOperation, ApiUseTags } from '@nestjs/swagger';
import { Body, Controller, Get, Param, Post, Request, UsePipes } from '@nestjs/common';
import { NationalityService } from './nationality.service';
import { Nationality } from './dto/nationality';
import { BodyParamValidationPipe } from '../../common/pipes/body-param-validation.pipe';

@ApiUseTags('Nationality')
@Controller('nationality')
export class NationalityController {
  constructor(private readonly nationalityService: NationalityService) {
  }

  @Get()
  @ApiOperation({title: 'Nationality list'})
  async list(@Request() request) {
    return await this.nationalityService.list();
  }

  @Get(':prefix')
  @ApiOperation({title: 'Get Nationality'})
  async find(@Param('prefix') prefix: string) {
    return await this.nationalityService.findOneByPrefix(prefix);
  }

  @Post()
  @UsePipes(BodyParamValidationPipe)
  @ApiOperation({title: 'Create Nationality'})
  async create(@Body() nationality: Nationality) {
    return await this.nationalityService.create(nationality);
  }
}
