import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NationalityEntity } from './nationality.entity';
import { NationalityController } from './nationality.controller';
import { NationalityService } from './nationality.service';

@Module({
  imports: [TypeOrmModule.forFeature([NationalityEntity])],
  controllers: [NationalityController],
  providers: [NationalityService],
  exports: [NationalityService],
})
export class NationalityModule {}
